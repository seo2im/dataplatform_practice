import psycopg2 as pg2
import os

def get_connection():
  connect = pg2.connect(host='db',
                    database='test',
                    user=os.getenv('DB_ID'),
                    password=os.getenv('DB_PASSWORD'),
                    port='5432')
  return connect
