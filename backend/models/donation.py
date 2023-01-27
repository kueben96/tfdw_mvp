from extensions import db, ma


class Donation(db.Model):
    """
    Database model for table donations.
    """
    __tablename__ = "donations"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    donation_type = db.Column(db.String, nullable=False, default=False)
    number = db.Column(db.Integer, nullable=False, default=False)
    color = db.Column(db.String, nullable=False, default=False)
    cut = db.Column(db.String, nullable=False, default=False)
    description = db.Column(db.String(), nullable=False)

    # TODO: add location
    # TODO: add size (children, adult)

    # allow to give each object a string representation to recognize it for debugging purposes

    def __repr__(self):
        return f"<Donation {self.id}, {self.user_id}, {self.donation_type}, {self.number}, {self.color}, {self.cut}, {self.description}>"


class DonationSchema(ma.Schema):
    """
    Marshmallow schema for database table donations.
    """
    class Meta:
        fields = ("id", "user_id", "donation_type", "number", "color", "cut", "description")


donation_schema = DonationSchema()
donations_schema = DonationSchema(many=True)
