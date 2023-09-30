from flask import Flask, request, jsonify
from flask_cors import cross_origin
import openai

# Replace with your actual OpenAI GPT-3 API key
api_key = "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"

app = Flask(__name__)

# Initialize the OpenAI API client
openai.api_key = api_key

@app.route('/generate-response', methods=['POST'])
@cross_origin()
def generate_response():
    # Get the prompt from the POST request
    data = request.get_json()
    prompt = data.get('prompt')
    technologies = data.get('tech')
    prompt = f"""W języku polskim, stwórz listę kroków niezbędnych do wykonania projektu podanego poniżej, na przykład:
             dla 'programowanie kalkulatora' powinno zwrócić odpowiedź podobną do:
             1. Zdefiniuj podstawowe operacje matematyczne jako funkcje (dodawanie, odejmowanie, mnożenie, dzielenie).
             2. Poproś użytkownika o wybór operacji i zapisz jego wybór.
             3. Poproś użytkownika o wprowadzenie dwóch liczb i zapisz je jako liczby zmiennoprzecinkowe.
             4. Na podstawie wyboru użytkownika wykonaj odpowiednią operację matematyczną i wyświetl wynik.
             5. Opcjonalnie, dodaj obsługę błędów, np. sprawdź, czy użytkownik nie próbuje dzielić przez zero.
             6. Uruchom program i przetestuj go, aby upewnić się, że działa zgodnie z oczekiwaniami.
             Zrób to dla poniższego promptu, nie musisz się ograniczać do ilości kroków, użyj technologii {technologies}:
                 {prompt}"""
    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    try:
        # Generate a response using GPT-3.5-turbo
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Specify the chat model
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
        )

        # Extract the generated text
        generated_text = response.choices[0].message["content"]
        return jsonify({'response': generated_text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
