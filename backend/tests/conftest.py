import os


def pytest_generate_tests(metafunc):
    os.environ['SQLALCHEMY_DATABASE_URI'] = "postgresql://docker:docker@database:5432/exampledb"
