import * as celery from 'celery-node';

const client = celery.createClient("amqp://user:password@mq:5672", "amqp://user:password@mq:5672");

export default client;
