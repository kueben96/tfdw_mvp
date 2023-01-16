from backend.models.user import User


def test_new_user():
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check all attributes of the created User model object are correct
    """
    user = User(id=1, first_name="Alice", last_name="Cooper", email="alice@outlook.com", phone="1234",
                club="Alices's Football Team", street="Street 10", zip_code=22525, city="Hamburg", region="Hamburg",
                preferred_contact="email", is_donor=True)

    assert user.id == 1
    assert user.first_name == "Alice"
    assert user.last_name == "Cooper"
    assert user.email == "alice@outlook.com"
    assert user.phone == "1234"
    assert user.club == "Alices's Football Team"
    assert user.street == "Street 10"
    assert user.zip_code == 22525
    assert user.city == "Hamburg"
    assert user.region == "Hamburg"
    assert user.preferred_contact == "email"
    assert user.is_donor == True
