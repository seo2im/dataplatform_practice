import express from 'express';
import db from './model/connect';

const app = express();

app.get('/', (req, res) => res.send('hello world1'));
app.get('/api/test', (req, res) => {
  db.none('INSERT INTO USERS(ID, name) VALUES($1, $2)', [1, 'NAME'])
    .then(() => console.log('suc'))
    .catch(() => console.log('err'));

  res.send('test');
});

app.listen(3000, () => console.log('Connect'));
