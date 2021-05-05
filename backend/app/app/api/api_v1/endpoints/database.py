from typing import Any, List

from fastapi import APIRouter, Body, Depends, HTTPException
from app import schemas, models
from app.api import deps
from app.db.base import get_metadata
from app.db.session import engine
from sqlalchemy.orm import Session
from sqlalchemy import inspect
from functools import lru_cache

from fastapi.responses import UJSONResponse


router = APIRouter()


@lru_cache
def get_inspector_table_names():
    return inspect(engine).get_table_names()


@router.get("/table",response_model=schemas.DatabaseTableName)
def read_users(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve Tabels with data type.
    """
    metadata = get_metadata()
    data = get_inspector_table_names()
    print(data)
    return {
        "names":data
    }

@router.get("/tables/datatypes")
def read_users(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve Tabels with data type.
    """
    metadata = get_metadata()
    response = []
    for value in metadata.tables.values():
        template = {}
        template['name'] = value.name
        temp =[]
        for i in value.columns:
            temp.append({f"{i.name}":f"{i.type}"})                        
        template['fields'] = temp
        response.append(template)
        

    return response


@router.get("/table/{name}/values")
def get_table_values(
    name: str,
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(deps.get_current_active_superuser),):


    """
    will return all the values of that particular table
    """

    try:
        table_names = get_inspector_table_names()
        response = []
        metadata = get_metadata()

        if name in table_names :
            data = db.query(metadata.tables[f'{name}']).all()
            for row in data:
                response.append(row)
            return response
        else:
            raise HTTPException(
                404,
                detail=f"requested {name} is not found avilabe are {table_names}"
            )
    except NameError as e:
        raise HTTPException(
                404,
                detail=f"{e}"
            )   