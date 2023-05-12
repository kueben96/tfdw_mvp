import jwt
import os

from extensions import db
from functools import wraps
from flask import Flask, jsonify, request, Blueprint

from models.user import User, user_schema, users_schema

user_route = Blueprint('user_route', __name__)


def token_required(optional=False, refresh=False, reset=False):
    """
    Decorator function for routes requiring authentication.
    Expects token in request header (x-access-token as access token for most requests,
                                     refresh-token for token refresh,
                                     reset_token for password reset)
    Args:
        optional: if true, token is optional and route can be accessed without token
        refresh: if true, refresh token is needed to access route
        reset: if true, reset token is needed to access route

    Returns: if authorization is successful: current user object (user data, retrieved from users table),
             else: message stating token is invalid / missing

    """

    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            token = None
            current_user = None
            if refresh:
                # jwt is passed in the request header
                if 'refresh-token' in request.headers:
                    token = request.headers['refresh-token']
            elif reset:
                # jwt is passed in the request header
                if 'reset_token' in request.headers:
                    token = request.headers['reset_token']
            else:
                # jwt is passed in the request header
                if 'x-access-token' in request.headers:
                    token = request.headers['x-access-token']
            if optional:
                if token:
                    try:
                        # decoding the payload to fetch the stored details
                        data = jwt.decode(token, os.environ.get('SECRET_KEY'))
                        current_user = User.query.filter_by(id=data['id']).first()
                    except:
                        return jsonify({'message': 'Token is invalid!!'}), 401
                else:
                    current_user = None

            else:
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

        return wrapper

    return decorator


def verify_email(email):
    """
    Verifies the given email and returns user if present in database.
    Args:
        email: user email
    Returns: user object if email is present in database, else user variable is empty

    """
    user = User.query.filter_by(email=email).first()
    return user


def verify_reset_password_token(token):
    """
    Verifies the password reset token and returns current user.
    Args:
        token: reset_token
    Returns: if reset_token is valid and user present in database: current user: object of currently logged in user,
             else: error message stating token is invalid
    """
    try:
        # decoding the payload to fetch the stored details
        data = jwt.decode(token, os.environ.get('SECRET_KEY'))
        current_user = User.query.filter_by(id=data['id']).first()
    except:
        return jsonify({'message': 'Token is invalid!!'}), 401
    return current_user


@user_route.route('/api/user', methods=['GET'])
@token_required()
def get_users(current_user):
    """
    Get all users from the database table users.
    Args:
        current_user: user currently logged in (gets returned by token_required wrapper)
    Returns: json with list of all users
    """
    all_users = User.query.all()
    return jsonify(users_schema.dump(all_users))


@user_route.route('/api/user/<int:user_id>', methods=['GET'])
@token_required()
def get_user(current_user, user_id: int):
    """
    Gets a specific user by id from the users database table.
    Args:
        current_user: user currently logged in (gets returned by token_required wrapper)
        user_id: id of user
    Returns: json with user data
    """
    user = User.query.get(user_id)
    return user_schema.jsonify(user)


@user_route.route('/api/user/<int:user_id>', methods=['PATCH'])
@token_required()
def update_user(current_user, user_id: int):
    """
    Updates a given user by id in the users database table.
    Args:
        current_user: user currently logged in
        user_id: id of user to be updated
    Returns: json of updated user
    """
    first_name = request.json.get('first_name', '')
    last_name = request.json.get('last_name', '')
    email = request.json.get('email', '')
    phone = request.json.get('phone', '')
    password = current_user.password
    street = request.json.get('street', '')
    zip_code = request.json.get('zip_code', '')
    city = request.json.get('city', '')
    region = request.json.get('region', '')
    role = current_user.role
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
@token_required()
def delete_user(current_user, user_id: int):
    """
    Deletes a user by id from the users database table.
    Args:
        current_user: user currently logged in (gets returned by token_required wrapper)
        user_id: id of user to be deleted
    Returns: json of deleted user entity from database table users
    """
    user = User.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)
