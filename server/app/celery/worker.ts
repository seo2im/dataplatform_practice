import * as celery from 'celery-node';

const worker = celery.createWorker("amqp://user:password@mq:5672", "amqp://user:password@mq:5672");
worker.register("task.add", (a: number, b: number) => a + b);
worker.start();
