import pytest
from datetime import datetime

from models.donation import Donation


@pytest.fixture(scope='module')
def new_donation():
    """
    Creates a new user object from the database model User.
    Returns: user object
    """
    date = datetime(year=2023, month=4, day=14, hour=12, minute=23, second=0)
    donation = Donation(id=1, user_id=2, date=date, category="jersey_kit", amount=1, size_1="adult", size_2="M",
                        color_1="white", color_2="green", description="green and white striped jersey kit adult size M",
                        status="offen")
    return donation


def test_new_donation(new_donation):
    """
    GIVEN a Donation model
    WHEN a new Donation is created
    THEN check all attributes of the created Donation model object are correct
    """
    date = datetime(year=2023, month=4, day=14, hour=12, minute=23, second=0)

    assert new_donation.id == 1
    assert new_donation.user_id == 2
    assert new_donation.date == date
    assert new_donation.category == "jersey_kit"
    assert new_donation.amount == 1
    assert new_donation.size_1 == "adult"
    assert new_donation.size_2 == "M"
    assert new_donation.color_1 == "white"
    assert new_donation.color_2 == "green"
    assert new_donation.description == "green and white striped jersey kit adult size M"
    assert new_donation.status == "offen"

    assert isinstance(new_donation.id, int)
    assert isinstance(new_donation.user_id, int)
    assert isinstance(new_donation.date, datetime)
    assert isinstance(new_donation.category, str)
    assert isinstance(new_donation.amount, int)
    assert isinstance(new_donation.size_1, str)
    assert isinstance(new_donation.size_2, str)
    assert isinstance(new_donation.color_1, str)
    assert isinstance(new_donation.color_2, (str, type(None)))
    assert isinstance(new_donation.description, (str, type(None)))
    assert isinstance(new_donation.status, str)
