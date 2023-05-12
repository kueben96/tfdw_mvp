from flask import Flask, jsonify, request, Blueprint
from sqlalchemy import or_
from datetime import datetime
import pytz

from models.donation import Donation, donation_schema
from models.user import User
from extensions import db

from api.user import token_required

donation_route = Blueprint('donation_route', __name__)


@donation_route.route('/api/donation', methods=['POST'])
@token_required()
def create_donation(current_user):
    """
    Creates a new donation entity in the donations database table.
    Args:
        current_user: user that is currently logged in, authorized by token
    Returns: json with donation data
    """
    user_id = current_user.id

    # donation date is set to current date and time
    tz = pytz.timezone('Europe/Berlin')
    date = datetime.now(tz)

    category = request.json.get('category', '')
    amount = request.json.get('amount', '')
    size_1 = request.json.get('size_1', '')
    size_2 = request.json.get('size_2', '')
    color_1 = request.json.get('color_1', '')
    color_2 = request.json.get('color_2', '')
    description = request.json.get('description', '')
    status = "offen"  # status for a new donation is always set to "offen" (active)

    donation = Donation(user_id=user_id,
                        date=date,
                        category=category,
                        amount=amount,
                        size_1=size_1,
                        size_2=size_2,
                        color_1=color_1,
                        color_2=color_2,
                        description=description,
                        status=status)

    db.session.add(donation)
    db.session.commit()

    return donation_schema.jsonify(donation)


@donation_route.route('/api/donation', methods=['GET'])
@token_required(optional=True)
def get_donations(current_user):
    """
    Get all donations from the database table "donations" joined with table "user".
    If arguments are given in query string, results are being filtered by given arguments.
    The user does not have to be authorized to do this request.
    Args:
        current_user: user currently logged in (if user is signed in, they can view contact data, else they can only
        see the donations)
    Returns: if user is signed in: json with list of all open/active donations and corresponding user data,
             else: only donations
             if admin user: json with all donations no matter their status
    with zip_code
    """
    if current_user:
        if current_user.role == "admin":
            results = (db.session.query(Donation.id, Donation.date, Donation.category, Donation.status, User.first_name)
                       .join(User, User.id == Donation.user_id)).all()

            return jsonify([dict(id=x.id, date=x.date, category=x.category, status=x.status, first_name=x.first_name)
                            for x in results])

    args = request.args.to_dict()
    if args:
        args['status'] = "offen"
        if 'color' in args:
            color = args.pop('color')

            filter_data = {key: value for (
                key, value) in args.items() if value}

            results = (db.session.query(Donation.id, Donation.date, Donation.category, Donation.amount,
                                        Donation.size_1, Donation.size_2, Donation.color_1, Donation.color_2,
                                        Donation.description, User.zip_code, User.city)
                       .filter_by(**filter_data)
                       .filter(or_(Donation.color_1 == color, Donation.color_2 == color))
                       .join(User, User.id == Donation.user_id)).all()
        else:
            filter_data = {key: value for (
                key, value) in args.items() if value}

            results = (db.session.query(Donation.id, Donation.date, Donation.category, Donation.amount,
                                        Donation.size_1, Donation.size_2, Donation.color_1, Donation.color_2,
                                        Donation.description, User.zip_code, User.city)
                       .filter_by(**filter_data)
                       .join(User, User.id == Donation.user_id)).all()

    else:
        results = (db.session.query(Donation.id, Donation.date, Donation.category, Donation.amount,
                                    Donation.size_1, Donation.size_2, Donation.color_1, Donation.color_2,
                                    Donation.description, User.zip_code, User.city)
                   .filter_by(status="offen")
                   .join(User, User.id == Donation.user_id)).all()

    return jsonify([dict(id=x.id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1, size_2=x.size_2,
                         color_1=x.color_1, color_2=x.color_2, description=x.description, zip_code=x.zip_code,
                         city=x.city) for x in results])


@donation_route.route('/api/user_donations', methods=['GET'])
@token_required()
def get_user_donations(current_user):
    """
    Gets all donations of the user currently logged in.
    Args:
        current_user: user currently logged in
    Returns: json with all donations of the user
    """
    results = (db.session.query(Donation.id, Donation.user_id, Donation.date, Donation.category, Donation.amount,
                                Donation.size_1, Donation.size_2, Donation.color_1, Donation.color_2,
                                Donation.description)
               .filter_by(user_id=current_user.id)).all()

    return jsonify([dict(id=x.id, user_id=x.user_id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1,
                         size_2=x.size_2, color_1=x.color_1, color_2=x.color_2, description=x.description)
                    for x in results])


@donation_route.route('/api/donation_details', methods=['GET'])
@token_required(optional=True)
def get_donation_details(current_user):
    """
    Get donation details and user data for given donation_id.
    If user is authenticated: returns donor data, else only return donation data
    Args:
        current_user: user currently logged in
    Returns: json with donation details for given donation
    """
    args = request.args.to_dict()
    donation_id = args.get("id")

    if current_user:
        results = (db.session.query(Donation.id, Donation.date, Donation.category, Donation.amount,
                                    Donation.size_1, Donation.size_2, Donation.color_1, Donation.color_2,
                                    Donation.description, User.first_name, User.last_name, User.phone, User.email,
                                    User.zip_code, User.city, User.club_name)
                   .filter_by(id=donation_id)
                   .join(User, User.id == Donation.user_id)).all()
        return jsonify(
            [dict(id=x.id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1, size_2=x.size_2,
                  color_1=x.color_1, color_2=x.color_2, description=x.description, first_name=x.first_name,
                  last_name=x.last_name, phone=x.phone, email=x.email, zip_code=x.zip_code, city=x.city,
                  club_name=x.club_name) for x in results])
    else:
        results = (db.session.query(Donation.id, Donation.date, Donation.category, Donation.amount,
                                    Donation.size_1, Donation.size_2, Donation.color_1, Donation.color_2,
                                    Donation.description, User.zip_code, User.city)
                   .filter_by(id=donation_id)
                   .join(User, User.id == Donation.user_id)).all()
        return jsonify(
            [dict(id=x.id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1, size_2=x.size_2,
                  color_1=x.color_1, color_2=x.color_2, description=x.description, zip_code=x.zip_code,
                  city=x.city) for x in results])


@donation_route.route('/api/donation/<int:donation_id>', methods=['GET'])
@token_required()
def get_donation_by_id(donation_id: int):
    """
    Gets a specific donation by id from the donations database table.
    Args:
        donation_id: id of donation
    Returns: json with donation data
    """
    donation = Donation.query.get(donation_id)
    return donation_schema.jsonify(donation)


@donation_route.route('/api/donation/', methods=['PATCH'])
@token_required()
def update_donation(current_user):
    """
    Updates a given donation by id in the donations database table.
    Args:
        current_user: user currently logged in
    Returns: json of updated donation
    """
    args = request.args.to_dict()
    donation_id = args.get("id")

    user_id = current_user.id
    date = datetime.now()
    category = request.json.get('category', '')
    amount = request.json.get('amount', '')
    size_1 = request.json.get('size_1', '')
    size_2 = request.json.get('size_2', '')
    color_1 = request.json.get('color_1', '')
    color_2 = request.json.get('color_2', '')
    description = request.json.get('description', '')
    status = request.json.get('status', '')

    donation = Donation.query.get(donation_id)
    donation.user_id = user_id
    donation.date = date
    donation.category = category
    donation.amount = amount
    donation.size_1 = size_1
    donation.size_2 = size_2
    donation.color_1 = color_1
    donation.color_2 = color_2
    donation.description = description
    donation.status = status

    db.session.add(donation)
    db.session.commit()

    return donation_schema.jsonify(donation)


@donation_route.route("/api/donation", methods=['DELETE'])
@token_required()
def delete_donation():
    """
    Deletes a donation by id from the donations database table.
    Returns: json of deleted donation entity from database table donations
    """
    args = request.args.to_dict()
    donation_id = args.get("id")

    donation = Donation.query.get(donation_id)
    db.session.delete(donation)
    db.session.commit()
    return donation_schema.jsonify(donation)
