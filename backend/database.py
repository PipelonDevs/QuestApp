from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.inspection import inspect

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Serializer(object):

    def serialize(self):
        try:
            return {c: getattr(self, c) for c in inspect(self).attrs.keys()}
        except:
            return None

    @staticmethod
    def serialize_list(list_to_be_serialized):
        return [element.serialize() for element in list_to_be_serialized]


class CityChallenge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.Text)
    created_by = db.Column(db.String)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    role = db.Column(db.String)
    created_at = db.Column(db.TIMESTAMP)


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.Text)
    difficulty = db.Column(db.String)


class UserCourses(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, primary_key=True)
    is_finished = db.Column(db.Boolean)


class UserCityChallenges(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    city_challenge_id = db.Column(db.Integer, primary_key=True)
    is_finished = db.Column(db.Boolean)


class Technology(db.Model):
    name = db.Column(db.String, primary_key=True)


class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)


class Quests(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.Text)
    is_completed = db.Column(db.Boolean)
    course_id = db.Column(db.Integer)
    comment = db.Column(db.Text)


class Difficulty(db.Model):
    name = db.Column(db.String, primary_key=True)
    course_id = db.Column(db.Integer)


class CityChallengeTechnologies(db.Model):
    city_challenge_id = db.Column(db.Integer, primary_key=True)
    technology_name = db.Column(db.String, primary_key=True)


class TechnologyTags(db.Model):
    technology_name = db.Column(db.String, primary_key=True)
    tag_id = db.Column(db.Integer, primary_key=True)


class CourseTechnologies(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    technology_name = db.Column(db.String, primary_key=True)


# Define relationships
db.ForeignKeyConstraint(['tag_id'], ['tag.id'])
db.ForeignKeyConstraint(['technology_name'], ['technology.name'])
db.ForeignKeyConstraint(['course_id'], ['course.id'])
db.ForeignKeyConstraint(['technology_name'], ['technology.name'])
db.ForeignKeyConstraint(['course_id'], ['course.id'])
db.ForeignKeyConstraint(['user_id'], ['user.id'])
db.ForeignKeyConstraint(['city_challenge_id'], ['city_challenge.id'])
db.ForeignKeyConstraint(['course_id'], ['course.id'])
db.ForeignKeyConstraint(['city_challenge_id'], ['city_challenge.id'])
db.ForeignKeyConstraint(['technology_name'], ['technology.name'])
db.ForeignKeyConstraint(['technology_name'], ['technology.name'])
db.ForeignKeyConstraint(['course_id'], ['course.id'])
