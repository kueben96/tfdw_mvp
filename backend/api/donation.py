from flask import Flask, jsonify, request, Blueprint
from datetime import datetime
from models.donation import Donation, donation_schema, donations_schema
from extensions import db

from api.user import token_required

donation_route = Blueprint('donation_route', __name__)


@donation_route.route('/api/donation', methods=['POST'])
@token_required
def create_donation(current_user):
    """
    Creates a new donation entity in the donations database table.
    Returns: json with donation data
    """
    user_id = current_user.id
    date = datetime.now()
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
@token_required
def get_donations(current_user):
    """
    Get all donations from the database table donations.
    Returns: json with list of all donations
    """
    all_donations = Donation.query.all()
    return jsonify(donations_schema.dump(all_donations))


@donation_route.route('/api/donation/<int:donation_id>', methods=['GET'])
@token_required
def get_donation(current_user, donation_id: int):
    """
    Gets a specific donation by id from the donations database table.
    Args:
        donation_id: id of donation
    Returns: json with donation data
    """
    donation = Donation.query.get(donation_id)
    return donation_schema.jsonify(donation)


@donation_route.route('/api/donation/<int:donation_id>', methods=['PATCH'])
@token_required
def update_donation(current_user, donation_id: int):
    """
    Updates a given donation by id in the donations database table.
    Args:
        donation_id: id of donation to be updated
    Returns: json of updated donation
    """
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


@donation_route.route("/api/donation/<int:donation_id>", methods=['DELETE'])
@token_required
def delete_donation(current_user, donation_id: int):
    """
    Deletes a donation by id from the donations database table.
    Args:
        donation_id: id of donation to be deleted
    Returns: json of deleted donation entity from database table donations
    """
    donation = Donation.query.get(donation_id)
    db.session.delete(donation)
    db.session.commit()
    return donation_schema.jsonify(donation)

