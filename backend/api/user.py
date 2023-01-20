from flask import Flask, jsonify, request, Blueprint
from models.user import User, user_schema, users_schema
from extensions import db

user_route = Blueprint('user_route', __name__)

@user_route.route('/api/user', methods=['POST'])
def create_user():
    first_name = request.json.get('first_name', '')
    last_name = request.json.get('last_name', '')
    email = request.json.get('email', '')
    phone = request.json.get('phone', '')
    club = request.json.get('club', '')
    street = request.json.get('street', '')
    zip_code = request.json.get('zip_code', '')
    city = request.json.get('city', '')
    region = request.json.get('region', '')
    preferred_contact = request.json.get('preferred_contact', '')
    is_donor = request.json.get('is_donor', '')

    user = User(first_name=first_name, 
                last_name=last_name, 
                email=email,
                phone=phone,
                club=club,
                street=street,
                zip_code=zip_code,
                city=city,
                region=region,
                preferred_contact=preferred_contact,
                is_donor=is_donor)
    
    db.session.add(user)
    db.session.commit()
    
    return user_schema.jsonify(user)

@user_route.route('/api/user', methods=['GET']) # add id to route
def get_users():
    all_users = User.query.all()
    return jsonify(users_schema.dump(all_users))

@user_route.route('/api/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    return user_schema.jsonify(user)

@user_route.route('/api/user/<int:user_id>', methods=['PATCH'])
def update_user(user_id):
    first_name = request.json.get('first_name', '')
    last_name = request.json.get('last_name', '')
    email = request.json.get('email', '')
    phone = request.json.get('phone', '')
    club = request.json.get('club', '')
    street = request.json.get('street', '')
    zip_code = request.json.get('zip_code', '')
    city = request.json.get('city', '')
    region = request.json.get('region', '')
    preferred_contact = request.json.get('preferred_contact', '')
    is_donor = request.json.get('is_donor', '')

    user = User.query.get(user_id)
    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.phone = phone
    user.club = club
    user.street = street
    user.zip_code = zip_code
    user.city = city
    user.region = region
    user.preferred_contact = preferred_contact
    user.is_donor = is_donor

    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user)

    @user_route.route("/api/user/<int:user_id>", methods=['DELETE'])
    def delete_user(user_id):
        user = User.query.get(user_id)
        db.session.delete(user)
        db.session.commit()
        return user_schema.jsonify(user)
