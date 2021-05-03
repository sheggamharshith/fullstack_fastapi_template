from fastapi import APIRouter

from app.api.api_v1.endpoints import items, auth, users, utils ,database

api_router = APIRouter()
api_router.include_router(auth.router, tags=["Authorization"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(utils.router, prefix="/utils", tags=["utils"])

api_router.include_router(database.router, prefix="/database", tags=["Database"])
