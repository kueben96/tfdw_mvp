from flask import Flask, jsonify, request, flash, redirect, url_for, make_response
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Todo(db.Model):
    __tablename__ = "todos"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    completed = db.Column(db.Boolean, nullable=False, default=False)
    description = db.Column(db.String(), nullable=False)
    due_date = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f"<Todo {self.id}, {self.completed}, {self.description}>"


class Donor(db.Model):
    __tablename__ = "donors"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String, nullable=False, default=False)
    description = db.Column(db.String(), nullable=False)
    # allow to give each object a string representation to recognize it for debugging purposes

    def __repr__(self):
        return f"<Donor {self.id}, {self.name}, {self.description}>"
# donor1 = Donor(name="Dafina", description="Trousers")


@app.route('/api/donors', methods=['GET'])
def get_donors():
    donors = Donor.query.all()
    print(donors)
    return make_response(jsonify(donors), 200)


@app.route('/')
def index():
    return jsonify({'name': 'alice',
                    'location': 'hamburg',
                    'id': 1}, {'name': 'ben',
                               'location': 'hannover',
                               'id': 2}, )


@app.route('/api', methods=['GET'])
def donor_info():
    return jsonify({'name': 'alice',
                    'location': 'hamburg',
                    'id': 1}, {'name': 'ben',
                               'location': 'hannover',
                               'id': 2}, )


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
