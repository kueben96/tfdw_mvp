from datetime import datetime

import pytz
from flask import Flask, request, Blueprint, make_response
from werkzeug.security import generate_password_hash

from models.user import User
from extensions import db


signup_route = Blueprint('signup_route', __name__)


@signup_route.route('/api/signup', methods=['POST'])
def signup():
    """
    Creates a new user in the database.

    Returns: response if signup was successful
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
    date = datetime.now(pytz.timezone('Europe/Berlin'))

    # checking for existing user
    user = User.query \
        .filter_by(email=email) \
        .first()
    if not user:
        # database ORM object
        user = User(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            password=generate_password_hash(password),
            street=street,
            zip_code=zip_code,
            city=city,
            region=region,
            role=role,
            club_name=club_name,
            reviewed=False,
            date = date
        )

        # insert user
        db.session.add(user)
        db.session.commit()

        return make_response('Successfully registered.', 201)
    else:
        # returns 202 if user already exists
        return make_response('User already exists. Please log in.', 202)


