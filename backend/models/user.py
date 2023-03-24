from extensions import db, ma
from models.donation import Donation, DonationSchema
from models.donation_request import DonationRequest, DonationRequestSchema
from marshmallow_sqlalchemy import fields


class User(db.Model):
    """
    Database model for table users.
    """
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String, nullable=False, default=False)
    last_name = db.Column(db.String, nullable=False, default=False)
    email = db.Column(db.String, nullable=False, default=False)
    phone = db.Column(db.String, nullable=True, default=False)  # String because it could have a +
    password = db.Column(db.String, nullable=False, default=False)
    street = db.Column(db.String, nullable=False, default=False)
    zip_code = db.Column(db.Integer, nullable=False, default=False)
    city = db.Column(db.String, nullable=False, default=False)
    region = db.Column(db.String, nullable=False, default=False)  # Bundesland
    role = db.Column(db.String, nullable=False, default=False)
    club_name = db.Column(db.String, nullable=True, default=False)
    reviewed = db.Column(db.Boolean, nullable=True, default=False)  # only needed for receivers, they get reviewed
    # before being able to create donation requests
    user_donations = db.relationship(Donation, backref='user', single_parent=True)
    user_requests = db.relationship(DonationRequest, backref='user', single_parent=True)

    # allow to give each object a string representation to recognize it for debugging purposes
    def __repr__(self):
        return f"<User {self.id}, {self.first_name}, {self.last_name}, {self.email}, {self.phone}, {self.password}, " \
               f"{self.street}, {self.zip_code}, {self.city}, {self.region}, {self.role}, {self.club_name}, " \
               f"{self.reviewed}>"


class UserSchema(ma.SQLAlchemyAutoSchema):
    """
    Marshmallow schema for database table models.
    """

    class Meta:
        model = User
        load_instance = True
        include_relationships = True

        fields = (
            'id', 'first_name', 'last_name', 'email', 'phone', 'password', 'street', 'zip_code', 'city', 'region',
            'role', 'club_name', 'reviewed', 'user_donations', 'user_donation_requests')

    user_donations = fields.Nested(DonationSchema, many=True)
    user_donation_requests = fields.Nested(DonationRequestSchema, many=True)


user_schema = UserSchema()
users_schema = UserSchema(many=True)
