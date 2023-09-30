from flask import Flask, request, jsonify
from flask_cors import cross_origin
import openai
import json
from datetime import datetime

from database import app, db, CityChallenge, User, Course, Technology, Tag, Difficulty, Serializer, Quest

# Replace with your actual OpenAI GPT-3 API key
api_key = "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"

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


@app.route('/api/add_user', methods=['POST'])
@cross_origin()
def add_user():
    try:
        data = request.json

        created_at_str = data['created_at']

        # Step 1: Parse the date string into a datetime object
        created_at_datetime = datetime.strptime(created_at_str, "%d-%m-%Y")

        user = User(username=data['username'], role=data['role'], created_at=created_at_datetime)
        db.session.add(user)
        db.session.commit()

        return json.dumps({'message': 'User added successfully'}, indent=4, sort_keys=True, default=str), 200
    except Exception as e:
        return json.dumps({'error': 'An error occurred', 'details': str(e)}, indent=4, sort_keys=True, default=str), 500


@app.route('/api/add_course', methods=['POST'])
@cross_origin()
def add_course():
    try:
        data = request.json
        course = Course(title=data['title'], description=data['description'])
        for q in data['quests']:
            quest = Quest(name=q['name'], description=q['description'], is_completed=False)
            course.quests.append(quest)
        for t in data['technologies']:
            technology = Technology(name=t['name'])
            for tag in t['tags']:
                tag = Tag(name=tag['name'])
                technology.tags.append(tag)
            course.technologies.append(technology)
       # difficulty = Difficulty(name=data['difficulty'])
        #course.difficulty = difficulty
        db.session.add(course)
        db.session.commit()
        return json.dumps({'message': 'Course added successfully'}, indent=4, sort_keys=True, default=str), 200
    except Exception as e:
        return json.dumps({'error': 'An error occurred', 'details': str(e)}, indent=4, sort_keys=True, default=str), 500


#add course to user
@app.route('/api/add_course_to_user', methods=['POST'])
@cross_origin()
def add_course_to_user():
    try:
        data = request.json
        user = User.query.filter_by(id=data['user_id']).first()
        course = Course.query.filter_by(id=data['course_id']).first()
        user.courses.append(course)
        db.session.commit()
        return json.dumps({'message': 'Course added to user successfully'}, indent=4, sort_keys=True, default=str), 200
    except Exception as e:
        return json.dumps({'error': 'An error occurred', 'details': str(e)}, indent=4, sort_keys=True, default=str), 500



@app.route('/api/get_courses', methods=['GET'])
@cross_origin()
def get_courses():
    try:
        courses = Course.query.all()
        return json.dumps(Serializer.serialize_list(courses), indent=4, sort_keys=True, default=str), 200
    except Exception as e:
        return json.dumps({'error': 'An error occurred', 'details': str(e)}, indent=4, sort_keys=True, default=str), 500


if __name__ == '__main__':
    app.app_context().push()
    db.create_all()
    app.run(debug=True)
