import express from 'express';
import db from './model/connect';

const app = express();

app.get('/', (req, res) => res.send('hello world1'));
app.get('/api/hello', (req, res) => {
  res.send({
    hello: 'hello world2'
  });
});

app.listen(3000, () => console.log('Connect'));
