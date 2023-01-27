from extensions import db, ma


class DonationRequest(db.Model):
    __tablename__ = "donation_requests"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=False)
    category = db.Column(db.String, nullable=False, default=False)
    amount = db.Column(db.Integer, nullable=False, default=False)
    size_1 = db.Column(db.String, nullable=False, default=False)
    size_2 = db.Column(db.String, nullable=False, default=False)
    color_1 = db.Column(db.String, nullable=False, default=False)
    description = db.Column(db.String, nullable=True, default=False)
    status = db.Column(db.String, nullable=False, default=False)

    # allow to give each object a string representation to recognize it for debugging purposes

    def __repr__(self):
        return f"<DonationRequest {self.id}, {self.user_id}, {self.date}, {self.category}, {self.amount}, " \
               f"{self.size_1}, {self.size_2}, {self.color_1}, {self.description}, {self.status}>"


class DonationRequestSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = DonationRequest
        load_instance = True
        include_fk = True


donation_schema = DonationRequestSchema()
donations_schema = DonationRequestSchema(many=True)
