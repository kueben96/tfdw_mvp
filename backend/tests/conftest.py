import pytest

from app import create_app
from extensions import db
import config


# @pytest.fixture(autouse=True, scope="session")
# def app_dict():
#     app = create_app(app_config=config.TestingConfig)
#     app.config.update({"TESTING": True})
#
#     with app.app_context():
#         db.create_all()
#
#         yield {"app": app, "db": db}
#
#         db.session.remove()
#         if "test" in app.config["SQLALCHEMY_DATABASE_URI"]:
#             db.drop_all()
#
#
# @pytest.fixture(autouse=True, scope="session")
# def test_authentication_header():
#     return {"authorization": "Bearer MY-EXAMPLE-TOKEN"}
#
#
# @pytest.fixture()
# def client(app_dict, test_authentication_header):
#     app = app_dict["app"]
#     base_db = app_dict["db"]
#     client = app.test_client()
#
#     client.post("/foundational/",
#                 headers=authentication_header,
#             )

