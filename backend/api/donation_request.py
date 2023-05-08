from flask import Flask, jsonify, request, Blueprint, make_response
from datetime import datetime
import pytz

from dto.donation_request import DonationRequestDTO
from models.donation_request import DonationRequest, donation_request_schema, donation_requests_schema
from models.user import User
from extensions import db

from api.user import token_required

donation_request_route = Blueprint('donation_request_route', __name__)


@donation_request_route.route('/api/donation_request', methods=['POST'])
@token_required()
def create_donation_request(current_user):
    """
    Creates a new donation request entity in the donation_requests database table.
    Returns: json with donation request data
    """
    if current_user.reviewed:
        user_id = current_user.id
        tz = pytz.timezone('Europe/Berlin')
        date = datetime.now(tz)

        category = request.json.get('category', '')
        amount = request.json.get('amount', '')
        size_1 = request.json.get('size_1', '')
        size_2 = request.json.get('size_2', '')
        color_1 = request.json.get('color_1', '')
        description = request.json.get('description', '')
        status = "offen"

        donation_request_dto = DonationRequestDTO(user_id=user_id, date=date, category=category, amount=amount,
                                                  size_1=size_1, size_2=size_2, color_1=color_1,
                                                  description=description, status=status)

        donation_request_db = DonationRequest(user_id=donation_request_dto.user_id,
                                              date=donation_request_dto.date,
                                              category=donation_request_dto.category,
                                              amount=donation_request_dto.amount,
                                              size_1=donation_request_dto.size_1,
                                              size_2=donation_request_dto.size_2,
                                              color_1=donation_request_dto.color_1,
                                              description=donation_request_dto.description,
                                              status=donation_request_dto.status)

        db.session.add(donation_request_db)
        db.session.commit()

        return donation_request_schema.jsonify(donation_request_db)

    else:
        return make_response("Cannot create a donation request. Current user is not reviewed by TFWD Admins.")


@donation_request_route.route('/api/donation_request', methods=['GET'])
@token_required(optional=True)
def get_donation_requests(current_user):
    """
    Get all donation requests from the database table donation_requests joined with table user.
    If arguments are given in query string, results are being filtered by given arguments.
    Returns: json with list of all donation requests and corresponding user data
    """
    if current_user:
        if current_user.role == "admin":
            results = (db.session.query(DonationRequest.id, DonationRequest.date, DonationRequest.category,
                                        DonationRequest.status, User.club_name)
                       .join(User, User.id == DonationRequest.user_id)).all()

            return jsonify([dict(id=x.id, date=x.date, category=x.category, status=x.status, club_name=x.club_name)
                            for x in results])
    args = request.args.to_dict()
    if args:
        args['status'] = "offen"
        if 'color' in args:
            color = args.pop('color')
            args['color_1'] = color

        filter_data = {key: value for (key, value) in args.items() if value}

        results = (db.session.query(DonationRequest.id, DonationRequest.date, DonationRequest.category,
                                    DonationRequest.amount, DonationRequest.size_1, DonationRequest.size_2,
                                    DonationRequest.color_1, DonationRequest.description, User.zip_code, User.city)
                   .filter_by(**filter_data)
                   .join(User, User.id == DonationRequest.user_id)).all()

    else:
        results = (db.session.query(DonationRequest.id, DonationRequest.date, DonationRequest.category,
                                    DonationRequest.amount, DonationRequest.size_1, DonationRequest.size_2,
                                    DonationRequest.color_1, DonationRequest.description, User.zip_code, User.city)
                   .filter_by(status="offen")
                   .join(User, User.id == DonationRequest.user_id)).all()

    return jsonify([dict(id=x.id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1, size_2=x.size_2,
                         color_1=x.color_1, description=x.description, zip_code=x.zip_code, city=x.city) for x in
                    results])


@donation_request_route.route('/api/user_donation_requests', methods=['GET'])
@token_required()
def get_user_donations(current_user):
    """
    Gets all donations of the currently logged in user.
    Args:
        current_user: currently logged in user
    Returns: list of all donations from user
    """
    results = (db.session.query(User.id, DonationRequest.date, DonationRequest.category, DonationRequest.amount)
               .filter_by(id=current_user.id)
               .join(DonationRequest, User.id == DonationRequest.user_id)).all()

    return jsonify([dict(date=x.date, category=x.category, amount=x.amount) for x in results])

    # TODO: could be optimized by using the donations already present in current_user but difficult to access
    # current_user_json = user_schema.jsonify(current_user)
    # user_donation_requests = jsonify(current_user_json['user_donation_requests'])
    # return user_donation_requests


@donation_request_route.route('/api/donation_request_details', methods=['GET'])
@token_required(optional=True)
def get_donation_request_details(current_user):
    """
    Gets a specific donation request by id from the donation_requests database table.
    Returns: json with donation request data
    """
    args = request.args.to_dict()
    donation_request_id = args.get("id")

    if current_user:
        results = (
            db.session.query(DonationRequest.id, DonationRequest.date, DonationRequest.category, DonationRequest.amount,
                             DonationRequest.size_1, DonationRequest.size_2, DonationRequest.color_1,
                             DonationRequest.description, User.first_name, User.last_name, User.email,
                             User.zip_code, User.city)
            .filter_by(id=donation_request_id)
            .join(User, User.id == DonationRequest.user_id)).all()
        return jsonify(
            [dict(id=x.id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1, size_2=x.size_2,
                  color_1=x.color_1, description=x.description, first_name=x.first_name,
                  last_name=x.last_name, email=x.email, zip_code=x.zip_code, city=x.city) for x in results])
    else:
        results = (
            db.session.query(DonationRequest.id, DonationRequest.date, DonationRequest.category, DonationRequest.amount,
                             DonationRequest.size_1, DonationRequest.size_2, DonationRequest.color_1,
                             DonationRequest.description, User.zip_code, User.city)
            .filter_by(id=donation_request_id)
            .join(User, User.id == DonationRequest.user_id)).all()
        return jsonify(
            [dict(id=x.id, date=x.date, category=x.category, amount=x.amount, size_1=x.size_1, size_2=x.size_2,
                  color_1=x.color_1, description=x.description, zip_code=x.zip_code,
                  city=x.city) for x in results])


@donation_request_route.route('/api/donation_request', methods=['PATCH'])
@token_required()
def update_donation_request(current_user):
    """
    Updates a given donation request by id in the donation requests database table.
    Args:
        donation_request_id: id of donation request to be updated
    Returns: json of updated donation request
    """

    args = request.args.to_dict()
    donation_request_id = args.get("id")

    user_id = current_user.id
    date = datetime.now()
    category = request.json.get('category', '')
    amount = request.json.get('amount', '')
    size_1 = request.json.get('size_1', '')
    size_2 = request.json.get('size_2', '')
    color_1 = request.json.get('color_1', '')
    description = request.json.get('description', '')
    status = request.json.get('status', '')

    donation_request_dto = DonationRequestDTO(id=donation_request_id, user_id=user_id, date=date, category=category,
                                              amount=amount, size_1=size_1, size_2=size_2, color_1=color_1,
                                              description=description, status=status)

    donation_request_db = DonationRequest.query.get(donation_request_id)
    donation_request_db.user_id = donation_request_dto.user_id
    donation_request_db.date = donation_request_dto.date
    donation_request_db.category = donation_request_dto.category
    donation_request_db.amount = donation_request_dto.amount
    donation_request_db.size_1 = donation_request_dto.size_1
    donation_request_db.size_2 = donation_request_dto.size_2
    donation_request_db.color_1 = donation_request_dto.color_1
    donation_request_db.description = donation_request_dto.description
    donation_request_db.status = donation_request_dto.status

    db.session.add(donation_request_db)
    db.session.commit()

    return donation_request_schema.jsonify(donation_request_db)


@donation_request_route.route("/api/donation_request", methods=['DELETE'])
@token_required()
def delete_donation(current_user):
    """
    Deletes a donation request by id from the donation_requests database table.
    Args:
        donation_request_id: id of donation request to be deleted
    Returns: json of deleted donation request entity from database table donation requests
    """
    args = request.args.to_dict()
    donation_request_id = args.get("id")

    donation_request = DonationRequest.query.get(donation_request_id)
    db.session.delete(donation_request)
    db.session.commit()
    return donation_request_schema.jsonify(donation_request)
