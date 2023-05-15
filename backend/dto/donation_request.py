from datetime import datetime
from typing import Optional


class DonationRequestDTO:
    def __init__(
            self,
            id: None,
            user_id: int,
            date: datetime,
            category: str,
            amount: int,
            size_1: str,
            size_2: str,
            color_1: str,
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
        self.description = description
        self.status = status