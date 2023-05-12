import datetime
import json
from json import JSONEncoder


class UserDTO:
    """
    Data transfer object for User model.
    """

    def __init__(self, id, first_name, last_name, email, phone, password, street, zip_code, city, region, role,
                 club_name, reviewed, date):
        self.id = id,
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone = phone
        self.password = password
        self.street = street
        self.zip_code = zip_code
        self.city = city
        self.region = region
        self.role = role
        self.club_name = club_name
        self.reviewed = reviewed
        self.date = date


class UserEncoder(JSONEncoder):

    def default(self, object):

        if isinstance(object, UserDTO):

            return object.__dict__

        else:

            # call base class implementation which takes care of

            # raising exceptions for unsupported types

            return json.JSONEncoder.default(self, object)
