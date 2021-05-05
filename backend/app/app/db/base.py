# Import all the models, so that Base has them before being
# imported by Alembic
from app.db.base_class import Base
from app.models.item import Item
from app.models.user import User
from functools import lru_cache

@lru_cache
def get_metadata():
    print("called metadata")
    return Base.metadata

