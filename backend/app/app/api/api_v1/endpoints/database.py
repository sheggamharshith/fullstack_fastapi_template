from typing import Any, List

from fastapi import APIRouter, Body, Depends, HTTPException
from app import schemas, models
from app.api import deps
from app.db.base import Base
from sqlalchemy.orm import Session

from fastapi.responses import UJSONResponse


router = APIRouter()


@router.get("/tables")
def read_users(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve Tabels with data type.
    {
        "name": None
        "fields" : [
            {
            "name":type
            },
        ]
    }
    """
    metadata = Base.metadata
    response = []
    for value in metadata.tables.values():
        template = {}
        template['name'] = value.name
        temp =[]
        for i in value.columns:
            temp.append({f"{i.name}":f"{i.type}"})                        
        template['fields'] = temp
        response.append(template)
        

    print(response)
    return response
