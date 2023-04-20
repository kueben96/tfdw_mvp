import pytest
import config

from api.login import login_route
from app import create_app
from extensions import db
from models.user import User


def test_login():
    flask_app = create_app(app_config=config.TestingConfig)

    with flask_app.test_client() as test_client:
        response = test_client.post('/api/login', json={
                'email': 'ron.weasley@hogwarts.magic',
                'password': 'password'
            })
        assert response.status_code == 201
        assert 'token' in response.json[1]
        assert 'refresh_token' in response.json[2]
        assert 'id' in response.json[0]
        assert 'email' in response.json[0]
        assert 'first_name' in response.json[0]
        assert 'last_name' in response.json[0]
        assert 'phone' in response.json[0]
        assert 'street' in response.json[0]
        assert 'zip_code' in response.json[0]
        assert 'city' in response.json[0]
        assert 'region' in response.json[0]
        assert 'role' in response.json[0]
        assert 'club_name' in response.json[0]

        assert response.json[0].get('id') == 8
        assert response.json[0].get('email') == 'ron.weasley@hogwarts.magic'
        assert response.json[0].get('first_name') == 'Ron'
        assert response.json[0].get('last_name') == 'Weasley'
        assert response.json[0].get('phone') == '5678'
        assert response.json[0].get('street') == 'Street 12'
        assert response.json[0].get('zip_code') == 12345
        assert response.json[0].get('city') == 'Hogsmeade'
        assert response.json[0].get('region') == 'Scotland'
        assert response.json[0].get('role') == 'donor'
        assert response.json[0].get('club_name') == 'Gryffindor'


# @pytest.fixture
# def app():
#     app = create_app('test')
#     with app.app_context():
#         db.create_all()
#     yield app
#     with app.app_context():
#         db.drop_all()
#
#
# @pytest.fixture
# def client(app):
#     return app.test_client()
