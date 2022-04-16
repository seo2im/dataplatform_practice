from flask import Blueprint, jsonify
from model.connect import get_connection
from model.data import select_data

data_api = Blueprint('data_api', __name__)

@data_api.route('/data', methods=['GET'])
def get_data():
  conn = get_connection()
  datas = select_data(conn)
  return jsonify(datas)

@data_api.route('/data', methods=['POST'])
def post_data():
  return 'post data'