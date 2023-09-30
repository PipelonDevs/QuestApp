from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)


def get_model_response(prompt):
    # TODO: change prompt prefix to a one that makes some sense
    # prompt = f"""W języku polskim, stwórz listę kroków niezbędnych do wykonania projektu podanego poniżej, na przykład: 
    # dla 'programowanie kalkulatora' powinno zwrócić odpowiedź podobną do:
    # 1. Zdefiniuj podstawowe operacje matematyczne jako funkcje (dodawanie, odejmowanie, mnożenie, dzielenie).
    # 2. Poproś użytkownika o wybór operacji i zapisz jego wybór.
    # 3. Poproś użytkownika o wprowadzenie dwóch liczb i zapisz je jako liczby zmiennoprzecinkowe.
    # 4. Na podstawie wyboru użytkownika wykonaj odpowiednią operację matematyczną i wyświetl wynik.
    # 5. Opcjonalnie, dodaj obsługę błędów, np. sprawdź, czy użytkownik nie próbuje dzielić przez zero.
    # 6. Uruchom program i przetestuj go, aby upewnić się, że działa zgodnie z oczekiwaniami.
    # Zrób to dla:
    #     {prompt}"""
    prompt = f"""create a list of steps necessary to complete the project mentioned below, for example:
    For 'programming a calculator,' it should return a response similar to:
    1. Define basic mathematical operations as functions (addition, subtraction, multiplication, division).
    2. Ask the user to choose an operation and save their choice.
    3. Ask the user to input two numbers and store them as floating-point numbers.
    4. Based on the user's choice, perform the corresponding mathematical operation and display the result.
    5. Optionally, add error handling, e.g., check if the user is trying to divide by zero.
    6. Run the program and test it to ensure it works as expected.
    Do this for:
        {prompt} """

    url = "http://localhost:8080/v1/chat/completions"
    headers = {
        "Content-Type": "application/json"
    }
    data = {
        "model": "ggml-gpt4all-j",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.9
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response_data = response.json()
        model_response = response_data["choices"][0]["message"]["content"]

        try:
            # translate previous response to polish
            data2 = {
                "model": "ggml-gpt4all-j",
                "messages": [{"role": "user", "content": "przetłumacz to na polski: " + model_response}],
                "temperature": 0.9
            }
            second_response = requests.post(url, headers=headers, json=data2)
            second_response_data = second_response.json()
            polish_response = second_response_data["choices"][0]["message"]["content"]
            return polish_response
        except requests.exceptions.RequestException as e:
            print(e)
            return None
    except requests.exceptions.RequestException as e:
        print(e)
        return None


@app.route('/generate-quest', methods=['POST'])
@cross_origin()
def generate_quest():
    data = request.get_json()
    prompt = data.get('prompt')
    model_response = get_model_response(prompt)
    if model_response:
        # Enable Access-Control-Allow-Origin
        response = jsonify({"model_response": model_response})
        return response, 200
    else:
        response = jsonify({"error": "Failed to get model response"})
        return response, 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
