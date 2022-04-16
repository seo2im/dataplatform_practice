from flask import Flask
from model.connect import get_connection
from router.data import data_api
from router.crawl import crawl_api

app = Flask(__name__)
@app.route('/task')
def route():
  return 'Hello Task Server'
app.register_blueprint(data_api)
app.register_blueprint(crawl_api)

if __name__ == '__main__':
  app.run(host="0.0.0.0", port=5000)
