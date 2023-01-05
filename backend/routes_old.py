# from flask import current_app, jsonify, request
# from app import create_app
# from extensions import db
# from models import Donor, donors_schema
# import os

# Create an application instance
# app = create_app()

# Define a route to fetch the avaialable articles


# @app.route("/api/donors", methods=["GET"], strict_slashes=False)
# def articles():

#     donors = Donor.query.all()
#     results = donors_schema.dump(donors)

#     return jsonify(results)


# if __name__ == "__main__":
#     port = int(os.environ.get('PORT', 5000))
#     app.run(debug=True, host='0.0.0.0', port=port)
