import pytest
from datetime import datetime

from models.donation_request import DonationRequest


@pytest.fixture(scope='module')
def new_donation_request():
    """
    Creates a new user object from the database model User.
    Returns: user object
    """
    date = datetime(year=2023, month=4, day=14, hour=12, minute=23, second=0)
    donation_request = DonationRequest(id=1, user_id=2, date=date, category="jersey_kit", amount=1, size_1="adult",
                                       size_2="M", color_1="blue", description="blue jersey kit adult size M",
                                       status="offen")
    return donation_request


def test_new_donation(new_donation_request):
    """
    GIVEN a Donation model
    WHEN a new Donation is created
    THEN check all attributes of the created Donation model object are correct
    """
    date = datetime(year=2023, month=4, day=14, hour=12, minute=23, second=0)

    assert new_donation_request.id == 1
    assert new_donation_request.user_id == 2
    assert new_donation_request.date == date
    assert new_donation_request.category == "jersey_kit"
    assert new_donation_request.amount == 1
    assert new_donation_request.size_1 == "adult"
    assert new_donation_request.size_2 == "M"
    assert new_donation_request.color_1 == "blue"
    assert new_donation_request.description == "blue jersey kit adult size M"
    assert new_donation_request.status == "offen"

    assert isinstance(new_donation_request.id, int)
    assert isinstance(new_donation_request.user_id, int)
    assert isinstance(new_donation_request.date, datetime)
    assert isinstance(new_donation_request.category, str)
    assert isinstance(new_donation_request.amount, int)
    assert isinstance(new_donation_request.size_1, str)
    assert isinstance(new_donation_request.size_2, str)
    assert isinstance(new_donation_request.color_1, str)
    assert isinstance(new_donation_request.description, (str, type(None)))
    assert isinstance(new_donation_request.status, str)
