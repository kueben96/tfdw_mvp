import json

from api.user import token_required
from dto.user import UserDTO, UserEncoder
from extensions import db
from flask import Flask, jsonify, Blueprint, make_response

from models.user import User, user_schema


admin_route = Blueprint('admin_route', __name__)


@admin_route.route('/api/unreviewed_receivers', methods=['GET'])
@token_required()
def get_unreviewed_receivers(current_user):
    """
    Admin user gets list of all unreviewed receivers
    (receivers need to be reviewed before they can post a request for a donation).
    Args:
        current_user: user currently logged in (gets returned from token_required wrapper)
    Returns: list of all unreviewed receivers
    """
    results = (db.session.query(User.id, User.club_name, User.date, User.reviewed)
               .filter_by(reviewed=False)).all()

    return jsonify([dict(id=x.id, club_name=x.club_name, date=x.date, reviewed=x.reviewed) for x in results])


@admin_route.route('/api/update_receiver_reviewed/<int:user_id>', methods=['PATCH'])
@token_required()
def update_user_reviewed(current_user, user_id):
    """
    Admin updates the "reviewed" status of a receiver to True so that a receiver is able to post donation requests.
    Args:
        current_user: user currently logged in (gets returned from token_required wrapper)
        user_id: id of user to be updated
    Returns: updated receiver user object

    """
    user = User.query.get(user_id)
    user.reviewed = True
    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user)

