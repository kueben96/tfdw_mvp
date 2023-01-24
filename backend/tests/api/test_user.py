import pytest
from flask import Flask
from app import create_app
from extensions import db
from models.user import User
import json

mock_user_data = {
    "first_name": "Alice",
    "last_name": "Cooper",
    "email": "alice@outlook.com",
    "phone": "1234",
    "club": "Alices's Football Team",
    "street": "Street 10",
    "zip_code": 22525,
    "city": "Hamburg",
    "region": "Hamburg",
    "preferred_contact": "email",
    "is_donor": True
}

mock_request_headers = {
    'authorization-sha256': '123'
}


@pytest.fixture
def client():
    app = create_app()

    app.config["TESTING"] = True
    app.testing = True

    # This creates an in-memory postgresql db
    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://"

    client = app.test_client()
    with app.app_context():
        db.create_all()
        user1 = User(id=1, first_name="Alice", last_name="Cooper", email="alice@outlook.com", phone="1234",
                     club="Alices's Football Team", street="Street 10", zip_code=22525, city="Hamburg",
                     region="Hamburg", preferred_contact="email", is_donor=True)
        db.session.add(user1)
        db.session.commit()
    yield client


def test_get_user_by_id(client) -> None:
    rv = client.get("/api/user/1")
    assert rv.json == {
        "id": 1,
        "first_name": "Alice",
        "last_name": "Cooper",
        "email": "alice@outlook.com",
        "phone": "1234",
        "club": "Alices's Football Team",
        "street": "Street 10",
        "zip_code": 22525,
        "city": "Hamburg",
        "region": "Hamburg",
        "preferred_contact": "email",
        "is_donor": True
    }
