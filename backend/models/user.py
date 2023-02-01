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
    phone = db.Column(db.String, nullable=True, default=False)  # String because it could have a +?
    password = db.Column(db.String, nullable=False, default=False)
    street = db.Column(db.String, nullable=False, default=False)
    zip_code = db.Column(db.Integer, nullable=False, default=False)
    city = db.Column(db.String, nullable=False, default=False)
    region = db.Column(db.String, nullable=False, default=False)  # Bundesland
    role = db.Column(db.String, nullable=False, default=False)
    club_name = db.Column(db.String, nullable=True, default=False)
    user_donations = db.relationship(Donation, backref='user', single_parent=True)
    user_requests = db.relationship(DonationRequest, backref='user', single_parent=True)

    # allow to give each object a string representation to recognize it for debugging purposes
    def __repr__(self):
        return f"<User {self.id}, {self.first_name}, {self.last_name}, {self.email}, {self.phone}, {self.password}, " \
               f"{self.street}, {self.zip_code}, {self.city}, {self.region}, {self.role}, {self.club_name}>"


class UserSchema(ma.SQLAlchemyAutoSchema):
    """
    Marshmallow schema for database table models.
    """
    class Meta:
        model = User
        load_instance = True
        include_relationships = True
    user_donations = fields.Nested(DonationSchema, many=True)
    user_donation_requests = fields.Nested(DonationRequestSchema, many=True)


user_schema = UserSchema()
users_schema = UserSchema(many=True)
