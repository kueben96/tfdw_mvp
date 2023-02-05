import jwt
import os

from flask import Flask, jsonify, request, Blueprint, make_response
from werkzeug.security import check_password_hash
from datetime import datetime, timedelta

from models.user import User

login_route = Blueprint('login_route', __name__)


@login_route.route('/api/login', methods=['POST'])
def login():
    auth = request.json
    print(auth)
    print(os.environ.get('SECRET_KEY'))

    if not auth or not auth.get('email') or not auth.get('password'):
        # returns 401 if any email or / and password is missing
        return make_response(
            'Could not verify',
            401,
            {'WWW-Authenticate': 'Basic realm = "Login required!!"'}
        )

    user = User.query.filter_by(email=auth.get('email')).first()
    print(user)

    if not user:
        # returns 401 if user does not exist
        return make_response(
            'Could not verify!',
            401,
            {'WWW-Authenticate:' 'Basic realm = "User does not exist!!"'}
        )

    if check_password_hash(user.password, auth.get('password')):
        # generates the JWT Token
        token = jwt.encode({
            'id': user.id,
            'exp': datetime.utcnow() + timedelta(minutes=30)
        }, os.environ.get('SECRET_KEY'))


        return make_response(jsonify({'token': token.decode('UTF-8')}), 201)

    # returns 403 if password is wrong
    return make_response(
        'Could not verify',
        403,
        {'WWW-Authenticate': 'Basic realm = "Wrong Password!!'}
    )
