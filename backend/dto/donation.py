import json
from datetime import datetime
from json import JSONEncoder
from typing import Optional


class DonationDTO:
    def __init__(
            self,
            id: int,
            user_id: int,
            date: datetime,
            category: str,
            amount: int,
            size_1: str,
            size_2: str,
            color_1: str,
            color_2: Optional[str] = None,
            description: Optional[str] = None,
            status: str = "offen"
    ):

        self.id = id
        self.user_id = user_id
        self.date = date
        self.category = category
        self.amount = amount
        self.size_1 = size_1
        self.size_2 = size_2
        self.color_1 = color_1
        self.color_2 = color_2
        self.description = description
        self.status = status