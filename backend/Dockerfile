FROM postgres

WORKDIR /app

# COPY db /app/db/dump.sql 
COPY ./db/dump.sql /docker-entrypoint-initdb.d/

ADD ./db/dump.sql /docker-entrypoint-initdb.d
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD sandra2001
ENV POSTGRES_DB ontibici
FROM dpage/pgadmin4

RUN chmod +x server.sh
ENTRYPOINT ["./server.sh"]

FROM python:3

# Set unbuffered output for python
ENV PYTHONUNBUFFERED 1

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Create app directory
WORKDIR /app

# Install app dependencies
COPY requirements.txt .

RUN pip install -r requirements.txt

# Bundle app source
COPY . .

# Copy wait-for-postgres.sh script
COPY wait-for-postgres.sh /app/wait-for-postgres.sh
RUN chmod +x /app/wait-for-postgres.sh

# Set executable permissions for scripts
RUN chmod +x /app/django.sh
# RUN python manage.py migrate
RUN chmod +x entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]


# Expose port
EXPOSE 8000

# entrypoint to run the django.sh file
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
# CMD [  "python", "manage.py", "migrate" ]