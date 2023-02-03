import jwt
import os

from extensions import db
from functools import wraps
from flask import Flask, jsonify, request, Blueprint

from models.user import User, user_schema, users_schema


user_route = Blueprint('user_route', __name__)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        # jwt is passed in the request header
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        # return 401 if token is  not passed
        if not token:
            return jsonify({'message': 'Token is missing!!'}), 401
        try:
            # decoding the payload to fetch the stored details
            data = jwt.decode(token, os.environ.get('SECRET_KEY'))
            current_user = User.query.filter_by(id=data['id']).first()
        except:
            return jsonify({'message': 'Token is invalid!!'}), 401

        # returns the current logged in users context to the routes
        return f(current_user, *args, **kwargs)

    return decorated


@user_route.route('/api/user', methods=['GET'])
@token_required
def get_users(current_user):
    """
    Get all users from the database table users.
    Returns: json with list of all users
    """
    all_users = User.query.all()
    return jsonify(users_schema.dump(all_users))


@user_route.route('/api/user/<int:user_id>', methods=['GET'])
def get_user(user_id: int):
    """
    Gets a specific user by id from the users database table.
    Args:
        user_id: id of user
    Returns: json with user data
    """
    user = User.query.get(user_id)
    return user_schema.jsonify(user)


@user_route.route('/api/user/<int:user_id>', methods=['PATCH'])
def update_user(user_id: int):
    """
    Updates a given user by id in the users database table.
    Args:
        user_id: id of user to be updated
    Returns: json of updated user
    """
    first_name = request.json.get('first_name', '')
    last_name = request.json.get('last_name', '')
    email = request.json.get('email', '')
    phone = request.json.get('phone', '')
    password = request.json.get('password', '')
    street = request.json.get('street', '')
    zip_code = request.json.get('zip_code', '')
    city = request.json.get('city', '')
    region = request.json.get('region', '')
    role = request.json.get('role', '')
    club_name = request.json.get('club_name', '')

    user = User.query.get(user_id)
    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.phone = phone
    user.password = password
    user.street = street
    user.zip_code = zip_code
    user.city = city
    user.region = region
    user.role = role
    user.club_name = club_name

    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user)


@user_route.route("/api/user/<int:user_id>", methods=['DELETE'])
def delete_user(user_id: int):
    """
    Deletes a user by id from the users database table.
    Args:
        user_id: id of user to be deleted
    Returns: json of deleted user entity from database table users
    """
    user = User.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)
