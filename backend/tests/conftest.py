import pytest
from app import create_app
import config


@pytest.fixture
def flask_app():
    flask_app = create_app(app_config=config.TestingConfig)
    return flask_app


@pytest.fixture()
def logged_in_user(test_client):
    response = test_client.post('/api/login', json={
        'email': 'ron.weasley@hogwarts.magic',
        'password': 'password'
    })
    user = response.json[0]
    token = response.json[1]
    refresh_token = response.json[2]
    return response


@pytest.fixture
def test_client(flask_app):
    return flask_app.test_client()
