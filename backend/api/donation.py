from flask import Flask, jsonify, request, Blueprint

donation_route = Blueprint('donation_route', __name__)

@donation_route.route('/api/donation', methods=['POST'])
def create_donation():
    return jsonify()

@donation_route.route('/api/donation', methods=['POST'])
def update_donation():
    return "update successful"

@donation_route.route('/api/donation', methods=['GET'])
def get_donation():
    return jsonify({"clothes":"Jersey", 
                    "accessories":"None",
                    "number": 10,
                    "color": "black",
                    "description": "Male children black shirt"})