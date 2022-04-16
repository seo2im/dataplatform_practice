from flask import Blueprint, jsonify, request
from task.test_task import test_task

crawl_api = Blueprint('crawl_api', __name__)

@crawl_api.route('/crawl', methods=['POST'])
def crawl():
  task = test_task.apply_async()
  return jsonify({ task_id: task.id })

@crawl_api.route('/crawl_state', methods=['GET'])
def crawl_state():
  task = test_task.AsyncResult(request.args.get('task-id'))
  return jsonify({ state: task.state })