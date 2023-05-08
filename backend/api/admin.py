import json

from api.user import token_required
from dto.user import UserDTO, UserEncoder
from extensions import db
from flask import Flask, jsonify, request, Blueprint, make_response

from models.user import User, user_schema


admin_route = Blueprint('admin_route', __name__)


@admin_route.route('/api/unreviewed_receivers', methods=['GET'])
@token_required()
def get_unreviewed_receivers(current_user):
    """
    Admin user gets list of all unreviewed receivers.
    Args:
        current_user: admin user
    Returns: list of all unreviewed receivers
    """
    results = User.query.filter_by(reviewed=False).all()

    unreviewed_users = [UserDTO(id=x.id, first_name=x.first_name, last_name=x.last_name, email=x.email,
                                phone=x.phone, password=x.password, street=x.street, zip_code=x.zip_code,
                                city=x.city, region=x.region, role=x.role, club_name=x.club_name,
                                reviewed=x.reviewed, date=x.date) for x in results]

    unreviewed_users_json = json.dumps([UserEncoder().encode(ob) for ob in unreviewed_users])
    return make_response(unreviewed_users_json)


@admin_route.route('/api/update_receiver_reviewed/<int:user_id>', methods=['PATCH'])
@token_required()
def update_user_reviewed(current_user, user_id):
    """
    Admin updates the reviewed status of a receiver to True.
    Args:
        current_user: admin user
    Returns: updated receiver user object

    """
    user = User.query.get(user_id)
    user.reviewed = True
    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user)

