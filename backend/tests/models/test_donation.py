import pytest

from models.donation import Donation


@pytest.fixture(scope='module')
def new_donation():
    """
    Creates a new user object from the database model User.
    Returns: user object
    """
    donation = Donation(id=1, user_id=2, donation_type="sock", number=1, color="white", cut="unisex",
                        description="one sock to free an elf")
    return donation


def test_new_donation(new_donation):
    """
    GIVEN a Donation model
    WHEN a new Donation is created
    THEN check all attributes of the created Donation model object are correct
    """

    assert new_donation.id == 1
    assert new_donation.user_id == 2
    assert new_donation.donation_type == "sock"
    assert new_donation.number == 1
    assert new_donation.color == "white"
    assert new_donation.cut == "unisex"
    assert new_donation.description == "one sock to free an elf"
