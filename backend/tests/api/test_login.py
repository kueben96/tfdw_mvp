
def test_login(flask_app):

    with flask_app.test_client() as test_client:
        # Test case: Missing email field
        response = test_client.post('/api/login', json={'password': 'password'})
        assert response.status_code == 401

        # Test case: Missing password field
        response = test_client.post('/api/login', json={'email': 'ron.weasley@hogwarts.magic'})
        assert response.status_code == 401

        # Test case: User does not exist
        response = test_client.post('/api/login', json={'email': 'albus.dumbledore@hogwarts.magic', 'password': 'password'})
        assert response.status_code == 401

        # Test case: Wrong password
        response = test_client.post('/api/login', json={'email': 'ron.weasley@hogwarts.magic', 'password': 'alohomora'})
        assert response.status_code == 403

        # Test case: Successful login
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

        assert response.status_code == 201

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


# TODO: test_refresh
