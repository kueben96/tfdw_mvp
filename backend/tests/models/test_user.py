import pytest
from datetime import datetime

from models.user import User


@pytest.fixture(scope='module')
def new_user():
    """
    Creates a new user object from the database model User.
    Returns: user object
    """
    date = datetime(year=2023, month=4, day=14, hour=12, minute=23, second=0)
    user = User(id=1, first_name="Alice", last_name="Cooper", email="alice@outlook.com", phone="1234",
                password="password", role="donor",
                club_name="Alices's Football Team", street="Street 10", zip_code=22525, city="Hamburg",
                region="Hamburg",
                reviewed=False, date=date)
    return user


def test_new_user(new_user):
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check all attributes of the created User model object are correct
    """

    assert new_user.id == 1
    assert new_user.first_name == "Alice"
    assert new_user.last_name == "Cooper"
    assert new_user.email == "alice@outlook.com"
    assert new_user.phone == "1234"
    assert new_user.club_name == "Alices's Football Team"
    assert new_user.street == "Street 10"
    assert new_user.zip_code == 22525
    assert new_user.city == "Hamburg"
    assert new_user.region == "Hamburg"
    assert new_user.password == "password"
    assert new_user.role == "donor"
    assert new_user.date == datetime(year=2023, month=4, day=14, hour=12, minute=23, second=0)
    assert new_user.reviewed == False

    assert isinstance(new_user.id, int)
    assert isinstance(new_user.first_name, str)
    assert isinstance(new_user.last_name, str)
    assert isinstance(new_user.email, str)
    assert isinstance(new_user.phone, (str, type(None)))
    assert isinstance(new_user.club_name, (str, type(None)))
    assert isinstance(new_user.street, str)
    assert isinstance(new_user.zip_code, int)
    assert isinstance(new_user.city, str)
    assert isinstance(new_user.region, str)
    assert isinstance(new_user.password, str)
    assert isinstance(new_user.role, str)
    assert isinstance(new_user.date, datetime)
    assert isinstance(new_user.reviewed, (bool, type(None)))
