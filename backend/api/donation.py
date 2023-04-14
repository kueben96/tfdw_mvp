import json

from flask import Flask, jsonify, request, Blueprint
from sqlalchemy import or_, text
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import pytz

from models.donation import Donation, donation_schema
from models.user import User, user_schema
from extensions import db

from api.user import token_required

donation_route = Blueprint('donation_route', __name__)


@donation_route.route('/api/donation', methods=['POST'])
@token_required()
def create_donation(current_user):
    """
    Creates a new donation entity in the donations database table.
    Returns: json with donation data
    """
    user_id = current_user.id
    tz = pytz.timezone('Europe/Berlin')
    date = datetime.now(tz)

    category = request.json.get('category', '')
    amount = request.json.get('amount', '')
    size_1 = request.json.get('size_1', '')
    size_2 = request.json.get('size_2', '')
    color_1 = request.json.get('color_1', '')
    color_2 = request.json.get('color_2', '')
    description = request.json.get('description', '')
    status = "offen"

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
    Get all donations from the database table donations joined with table user.
    If arguments are given in query string, results are being filtered by given arguments.
    Returns: json with list of all donations and corresponding user data
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
    results = (db.session.query(User.id, Donation.date, Donation.category, Donation.amount)
               .filter_by(id=current_user.id)
               .join(Donation, User.id == Donation.user_id)).all()

    return jsonify([dict(date=x.date, category=x.category, amount=x.amount) for x in results])

    # TODO: could be optimized by using the donations already present in current_user but difficult to access
    # current_user_json = user_schema.jsonify(current_user)
    # user_donations = jsonify(current_user_json['user_donations'])
    # return user_donations


@donation_route.route('/api/donation_details', methods=['GET'])
@token_required(optional=True)
def get_donation_details(current_user):
    """
    Get donation details and user data for given donation_id.
    If user is authenticated: returns donor data, else only return donation data
    Returns: json with donation details for given donation
    """
    args = request.args.to_dict()
    donation_id = args.get("id")

    if current_user:
        results = (db.session.query(Donation.id, Donation.date, Donation.category, Donation.amount,
                                    Donation.size_1, Donation.size_2, Donation.color_1, Donation.color_2,
                                    Donation.description, User.first_name, User.last_name, User.email,
                                    User.zip_code, User.city)
                   .filter_by(id=donation_id)
                   .join(User, User.id == Donation.user_id)).all()
        return jsonify(
            [dict(id=x.id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1, size_2=x.size_2,
                  color_1=x.color_1, color_2=x.color_2, description=x.description, first_name=x.first_name,
                  last_name=x.last_name, email=x.email, zip_code=x.zip_code, city=x.city) for x in results])
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
def get_donation_by_id(current_user, donation_id: int):
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
def delete_donation(current_user):
    """
    Deletes a donation by id from the donations database table.
    Args:
        donation_id: id of donation to be deleted
    Returns: json of deleted donation entity from database table donations
    """
    args = request.args.to_dict()
    donation_id = args.get("id")

    donation = Donation.query.get(donation_id)
    db.session.delete(donation)
    db.session.commit()
    return donation_schema.jsonify(donation)
