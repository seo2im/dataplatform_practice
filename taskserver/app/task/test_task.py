from celery import Celery

BROKER = 'http://user:password@mq:5672'
BACKEND = 'http://user:password@mq:5672'

app = Celery('test', broker=BROKER, backend=BACKEND)

@app.task(bind=True)
def test_task(x, y):
  time.sleep(5)
  return { text: 'test celery task' }
