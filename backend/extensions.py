from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_mail import Mail

# Create various application instances
# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy()
migrate = Migrate()
ma = Marshmallow()
cors = CORS()
mail = Mail()
