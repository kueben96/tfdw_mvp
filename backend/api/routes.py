from flask import Flask, jsonify, request, Blueprint

# @rest_api.route('/donor', methods=['POST'])
# def create_donor():
#     firstname = request.json['firstname']
#     lastname = request.json['lastname']
#     email = request.json['email']
#     phone = request.json['phone']
#     organisation = request.json['organisation']
#     street = request.json['street']
#     city = request.json['city']
#     zip_code = request.json['zip_code']
#     .region = request.json['region']
#     return jsonify("created user")

# @rest_api.route('/donor', methods=['GET']) # add id to route
# def get_donor():
#     return jsonify({"firstname":"Bob", 
#                     "lastname":"Pense",
#                     "email": 'bob@outlook.com',
#                     "phone": 1234,
#                     "organisation": "Bob's Football Team",
#                     "street": "Straße 10",
#                     "cty":"Hamburg",
#                     "zip_code": 22525,
#                     "region": "Hamburg"})

# @rest_api.route('/donor', methods=['POST'])
# def update_donor():
#     return jsonify()