from extensions import db, ma


class Donation(db.Model):
    """
    Database model for table donations.
    """
    __tablename__ = "donations"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=False)
    category = db.Column(db.String, nullable=False, default=False)
    amount = db.Column(db.Integer, nullable=False, default=False)
    size_1 = db.Column(db.String, nullable=False, default=False)
    size_2 = db.Column(db.String, nullable=False, default=False)
    color_1 = db.Column(db.String, nullable=False, default=False)
    color_2 = db.Column(db.String, nullable=True, default=False)
    description = db.Column(db.String, nullable=True, default=False)
    status = db.Column(db.String, nullable=False, default=False)

    # allow to give each object a string representation to recognize it for debugging purposes

    def __repr__(self):
        return f"<Donation {self.id}, {self.user_id}, {self.date}, {self.category}, {self.amount}, {self.size_1}, " \
               f"{self.size_2}, {self.color_1}, {self.color_2}, {self.description}, {self.status}>"


class DonationSchema(ma.SQLAlchemyAutoSchema):
    """
    Marshmallow schema for database table donations.
    """
    class Meta:
        model = Donation
        load_instance = True
        include_fk = True


donation_schema = DonationSchema()
donations_schema = DonationSchema(many=True)

