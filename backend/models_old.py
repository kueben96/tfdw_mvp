from app import db, ma
from datetime import datetime


class Todo(db.Model):
    __tablename__ = "todos"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    completed = db.Column(db.Boolean, nullable=False, default=False)
    description = db.Column(db.String(), nullable=False)
    due_date = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f"<Todo {self.id}, {self.completed}, {self.description}>"


class TodoSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id", "completed", "description", "due_date")


todo_schema = TodoSchema()
todos_schema = TodoSchema(many=True)


class Donor(db.Model):
    __tablename__ = "donors"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String, nullable=False, default=False)
    description = db.Column(db.String(), nullable=False)
    # allow to give each object a string representation to recognize it for debugging purposes

    def __repr__(self):
        return f"<Donor {self.id}, {self.name}, {self.description}>"
# donor1 = Donor(name="Dafina", description="Trousers")


class DonorSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "description")


donor_schema = DonorSchema()
donors_schema = DonorSchema(many=True)
