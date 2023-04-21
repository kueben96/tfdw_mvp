import os
from datetime import datetime, timedelta
import jwt


def test_token_required(test_client):

    # create jwt token for test user
    token = jwt.encode({
        'id': 8,
        'exp': datetime.utcnow() + timedelta(minutes=30)
    }, os.environ.get('SECRET_KEY'))

    # Test without token when optional is True
    response = test_client.get('/api/donation', headers={})
    assert response.status_code == 200

    # Test with invalid token when optional is True
    response = test_client.get('/api/donation', headers={'x-access-token': 'invalid_token'})
    assert response.status_code == 200

    # TODO: returns 401 even if token should be valid
    # Test with valid token when optional is True
    # token = logged_in_user.json[1]["token"]
    response = test_client.get('/api/donation', headers={'x-access-token': token})
    assert response.status_code == 200

    # Test without token when optional is False
    response = test_client.get('/api/user', headers={})
    assert response.status_code == 401

    # Test with invalid token when optional is False
    response = test_client.get('/api/user', headers={'x-access-token': 'invalid_token'})
    assert response.status_code == 401

    # # Test with valid token when optional is False
    # token = jwt.encode({'id': 1}, app.config['SECRET_KEY'])
    # response = client.get('/example2', headers={'x-access-token': token})
    # assert response.status_code == 200
    #
    # # Test with valid refresh token
    # refresh_token = jwt.encode({'id': 1}, app.config['SECRET_KEY'])
    # response = client.get('/refresh', headers={'refresh-token': refresh_token})
    # assert response.status_code == 200
    #
    # # Test with invalid refresh token
    # response = client.get('/refresh', headers={'refresh-token': 'invalid_token'})
    # assert response.status_code == 401
    #
    # # Test with valid reset token
    # reset_token = jwt.encode({'id': 1}, app.config['SECRET_KEY'])
    # response = client.get('/reset', headers={'reset_token': reset_token})
    # assert response.status_code == 200
    #
    # # Test with invalid reset token
    # response = client.get('/reset', headers={'reset_token': 'invalid_token'})
    # assert response.status_code == 401


def test_get_users(test_client, logged_in_user):

    # Test happy case
    token = logged_in_user.json[1]['token']
    response = test_client.get('/api/user', headers={'x-access-token': token})
    assert response.status_code == 200

