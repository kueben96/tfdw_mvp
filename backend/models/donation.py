from extensions import db, ma

class Donation(db.Model):
    __tablename__ = "donations"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    clothes = db.Column(db.String, nullable=False, default=False)
    accessories = db.Column(db.String, nullable=False, default=False)
    number = db.Column(db.Integer, nullable=False, default=False)
    color = db.Column(db.String, nullable=False, default=False)
    description = db.Column(db.String(), nullable=False)
    # allow to give each object a string representation to recognize it for debugging purposes

    def __repr__(self):
        return f"<Donation {self.id}, {self.clothes}, {self.accessories}, {self.number}, {self.color}, {self.description}>"
# donor = Donor(name="Dafina", description="Trousers")


class DonationSchema(ma.Schema):
    class Meta:
        fields = ("id", "clothes", "accessories", "number", "color", "description")


donation_schema = DonationSchema()
donation_schema = DonationSchema(many=True)