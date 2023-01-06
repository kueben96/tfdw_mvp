from extensions import db, ma

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String, nullable=False, default=False)
    last_name = db.Column(db.String, nullable=False, default=False)
    email = db.Column(db.String, nullable=False, default=False)
    phone = db.Column(db.String, nullable=False, default=False)  # String because it could have a +?
    club = db.Column(db.String, nullable=False, default=False)
    street = db.Column(db.String, nullable=False, default=False)
    zip_code = db.Column(db.Integer, nullable=False, default=False)
    city = db.Column(db.String, nullable=False, default=False)
    region = db.Column(db.String, nullable=False, default=False)  # Bundesland
    preferred_contact = db.Column(db.String, nullable=False, default=False)
    is_donor = db.Column(db.Boolean, nullable=False) # if True, then user is donor, otherwise user is receiver
    # allow to give each object a string representation to recognize it for debugging purposes

    def __repr__(self):
        return f"<User {self.id}, {self.first_name}, {self.last_name}, {self.email}, {self.phone}, {self.club}, {self.street}, {self.zip_code}, {self.city}, {self.region}, {self.preferred_contact}, {self.is_donor}>"


class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "first_name", "last_name", "email", "phone", "club", "street", "zip_code", "city", "region", "preferred_contact", "is_donor")


user_schema = UserSchema()
users_schema = UserSchema(many=True)