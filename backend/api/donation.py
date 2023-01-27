from flask import Flask, jsonify, request, Blueprint
from models.donation import Donation, donation_schema, donations_schema
from extensions import db

donation_route = Blueprint('donation_route', __name__)


@donation_route.route('/api/donation', methods=['POST'])
def create_donation():
    """
    Creates a new donation entity in the donations database table.
    Returns: json with donation data
    """
    user_id = request.json.get('user_id', '')
    # TODO: get user_id from the logged in user data later, can be replaced with random int to work with frontend
    donation_type = request.json.get('donation_type', '')
    number = request.json.get('number', '')
    color = request.json.get('color', '')
    cut = request.json.get('cut', '')
    description = request.json.get('description', '')

    donation = Donation(user_id=user_id,
                        donation_type=donation_type,
                        number=number,
                        color=color,
                        cut=cut,
                        description=description)

    db.session.add(donation)
    db.session.commit()

    return donation_schema.jsonify(donation)


@donation_route.route('/api/donation', methods=['GET'])
def get_donations():
    """
    Get all donations from the database table donations.
    Returns: json with list of all donations
    """
    all_donations = Donation.query.all()
    return jsonify(donations_schema.dump(all_donations))


@donation_route.route('/api/donation/<int:donation_id>', methods=['GET'])
def get_donation(donation_id: int):
    """
    Gets a specific donation by id from the donations database table.
    Args:
        donation_id: id of donation
    Returns: json with donation data
    """
    donation = Donation.query.get(donation_id)
    return donation_schema.jsonify(donation)


@donation_route.route('/api/donation/<int:donation_id>', methods=['PATCH'])
def update_donation(donation_id: int):
    """
    Updates a given donation by id in the donations database table.
    Args:
        donation_id: id of donation to be updated
    Returns: json of updated donation
    """
    user_id = request.json.get('user_id', '')
    donation_type = request.json.get('donation_type', '')
    number = request.json.get('number', '')
    color = request.json.get('color', '')
    cut = request.json.get('cut', '')
    description = request.json.get('description', '')

    donation = Donation.query.get(donation_id)
    donation.user_id = user_id
    donation.donation_type = donation_type
    donation.number = number
    donation.color = color
    donation.cut = cut
    donation.description = description

    db.session.add(donation)
    db.session.commit()

    return donation_schema.jsonify(donation)


@donation_route.route("/api/donation/<int:donation_id>", methods=['DELETE'])
def delete_donation(donation_id: int):
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
