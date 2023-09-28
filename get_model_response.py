from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def get_model_response(prompt, expand=True):
    if expand:
        #TODO: change prompt prefix to a one that makes some sense
        prompt = "rozszerz następujące zdanie: " + prompt

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
        return model_response
    except requests.exceptions.RequestException as e:
        print(e)
        return None

@app.route('/get_model_response', methods=['POST'])
def serve_model_response():
    data = request.get_json()
    prompt = data.get('prompt')
    model_response = get_model_response(prompt)
    if model_response:
        return jsonify({"model_response": model_response})
    else:
        return jsonify({"error": "Failed to get model response"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
