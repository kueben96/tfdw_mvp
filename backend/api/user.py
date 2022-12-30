from flask import Flask, jsonify, request, Blueprint

user_route = Blueprint('user_route', __name__)

@user_route.route('/user', methods=['POST'])
def create_donor():
    data = request.get_json()
    return jsonify("created user")

@user_route.route('/user', methods=['GET']) # add id to route
def get_donor():
    return jsonify({"firstname":"Bob", 
                    "lastname":"Pense",
                    "email": 'bob@outlook.com',
                    "phone": 1234,
                    "organisation": "Bob's Football Team",
                    "street": "Straße 10",
                    "cty":"Hamburg",
                    "zip_code": 22525,
                    "region": "Hamburg"})

@user_route.route('/user', methods=['POST'])
def update_donor():
    return jsonify()