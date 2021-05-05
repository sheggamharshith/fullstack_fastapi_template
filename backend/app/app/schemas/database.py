from typing import Optional,List

from pydantic import BaseModel


class DatabaseTableName(BaseModel):
    names: List[str]


class DatabaseTabelFull(BaseException):
    name: Optional[str]=None
    fields: list = []

    class Config:
        schema_extra = {
            "name":"tabel name",
            "fields": ["field1","field2","field3"]
        }
