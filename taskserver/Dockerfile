FROM python:3

COPY ./app /usr/app

RUN pip install flask
RUN pip install celery
RUN pip install psycopg2

WORKDIR /usr/app

CMD ["python3", "index.py"]
