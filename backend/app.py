from flask import Flask, jsonify, request
import json
import os

app = Flask(__name__)


@app.route('/')
def index():
    return jsonify({'name': 'alice',
                    'email': 'alicessss@outlook.com'})


@app.route('/signin', methods=['POST'])
def post_signin():
    email = request.json['email']
    password = request.json['password']
    return "signin successful"

@app.route('/donor', methods=['PUT'])
def create_donor():
    firstname = request.json['firstname']
    lastname = request.json['lastname']
    email = request.json['email']
    phone = request.json['phone']
    organisation = request.json['organisation']
    street = request.json['street']
    city = request.json['city']
    zip_code = request.json['zip_code']
    region = request.json['region']
    return jsonify("created user")

@app.route('/donor', methods=['GET']) # add id to route
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

@app.route('/donor', methods=['POST'])
def update_donor():
    return jsonify()

@app.route('/donation', methods=['POST'])
def create_donation():
    return jsonify()

@app.route('/donation', methods=['PUT'])
def update_donation():
    return "update successful"

@app.route('/donation', methods=['GET'])
def get_donation():
    return jsonify({"clothes":"Jersey", 
                    "accessories":"None",
                    "number": 10,
                    "color": "black",
                    "gender": "Male",
                    "description": "Male children black shirt"})

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
