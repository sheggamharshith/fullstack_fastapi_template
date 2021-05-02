#! /usr/bin/env bash


export $(cat .env | xargs)

export BACKEND_CORS_ORIGINS=[\"http://localhost\",\"http://localhost\"]
echo $BACKEND_CORS_ORIGINS

# Let the DB start
# python /app/app/backend_pre_start.py
python app/backend_pre_start.py
# Run migrations
alembic upgrade head

# Create initial data in DB
# python /app/app/initial_data.py
python app/initial_data.py