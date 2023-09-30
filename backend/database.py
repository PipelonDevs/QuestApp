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


user_course = db.Table('user_course',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('course.id'), primary_key=True),
    db.Column('is_finished', db.Boolean),
)

user_city_challenge = db.Table('user_city_challenge',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('city_challenge_id', db.Integer, db.ForeignKey('city_challenge.id'), primary_key=True),
    db.Column('is_finished', db.Boolean),
)


technology_tag = db.Table('technology_tag',
    db.Column('technology_name', db.Integer, db.ForeignKey('technology.name'), primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True),
)


city_challenge_technologies = db.Table("city_challenge_technologies",
                                       db.Column("city_challenge_id", db.Integer, db.ForeignKey("city_challenge.id"),
                                                 primary_key=True),
                                       db.Column("technology_name", db.String, db.ForeignKey("technology.name"),
                                                 primary_key=True)
                                       )

course_technologies = db.Table("course_technologies",
                               db.Column("course_id", db.Integer, db.ForeignKey("course.id"), primary_key=True),
                               db.Column("technology_name", db.String, db.ForeignKey("technology.name"), primary_key=True))


class CityChallenge(db.Model):
    __tablename__ = "city_challenge"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.Text)
    created_by = db.Column(db.String)
    technologies = db.relationship("Technology", secondary=city_challenge_technologies, backref="city_challenges")

    def serialize(self):
        d = Serializer.serialize(self)
        return d


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    role = db.Column(db.String)
    created_at = db.Column(db.DateTime)
    courses = db.relationship("Course", secondary=user_course, backref="users")
    city_challenges = db.relationship("CityChallenge", secondary=user_city_challenge, backref="users")


    def serialize(self):
        d = Serializer.serialize(self)
        d['created_at'] = d['created_at'].strftime('%Y-%m-%d-%H-%M')
        return d


class Course(db.Model):
    __tablename__ = "course"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.Text)
    technologies = db.relationship("Technology", secondary=course_technologies, backref="courses")
    quests = db.relationship("Quest", backref="course")
    difficulty = db.relationship("Difficulty", backref="course")

    def serialize(self):
        d = Serializer.serialize(self)
        return d


class Technology(db.Model):
    __tablename__ = "technology"

    name = db.Column(db.String, primary_key=True)
    tags = db.relationship("Tag", secondary=technology_tag, backref="technologies")\

    def serialize(self):
        d = Serializer.serialize(self)
        return d


class Tag(db.Model):
    __tablename__ = "tag"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    def serialize(self):
        d = Serializer.serialize(self)
        return d


class Quest(db.Model):
    __tablename__ = "quest"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.Text)
    is_completed = db.Column(db.Boolean)
    comment = db.Column(db.Text)
    course_id = db.Column(db.Integer, db.ForeignKey("course.id"))

    def serialize(self):
        d = Serializer.serialize(self)
        return d


class Difficulty(db.Model):
    __tablename__ = "difficulty"

    name = db.Column(db.String, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey("course.id"))

    def serialize(self):
        d = Serializer.serialize(self)
        return d



