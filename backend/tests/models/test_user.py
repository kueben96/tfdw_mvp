import pytest

from models.user import User


@pytest.fixture(scope='module')
def new_user():
    """
    Creates a new user object from the database model User.
    Returns: user object
    """
    user = User(id=1, first_name="Alice", last_name="Cooper", email="alice@outlook.com", phone="1234",
                password="password", role="donor",
                club_name="Alices's Football Team", street="Street 10", zip_code=22525, city="Hamburg", region="Hamburg")
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
