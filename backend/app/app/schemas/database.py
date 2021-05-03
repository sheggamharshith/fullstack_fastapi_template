from typing import Optional

from pydantic import BaseModel


class DatabaseTabel(BaseModel):
    name: Optional[str]=None


class DatabaseTabelFull(BaseException):
    name: Optional[str]=None
    fields: list = []

    class Config:
        schema_extra = {
            "name":"tabel name",
            "fields": ["field1","field2","field3"]
        }
