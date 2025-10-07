#!/bin/sh
set -e

echo "Waiting for MySQL to start..."
until nc -z -v -w30 db 3306
do
  echo "Waiting for database connection..."
  sleep 3
done

echo "MySQL is up! Starting the backend..."
exec java -jar app.jar