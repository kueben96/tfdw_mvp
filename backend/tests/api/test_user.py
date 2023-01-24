import pytest
from flask import Flask
from app import create_app
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


@pytest.fixture()
def app():
    app = create_app()
    app.config.update({
        "TESTING": True,
    })

    # other setup can go here

    yield app

    # clean up / reset resources here


@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.mark.get_request
def test_get_users(client):
    response = client.get('/api/user')

    assert response.status_code == 200


