import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import fs from 'fs';
import { addDatas, addUsers, getUsers } from './model';

const app = express();
app.use('/public', express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: 'public/' });

app.get('/', async (req, res) => {
  const users = await getUsers();
  if (users.length !== 1) res.send(200);
  else {
    try {
      await addUsers('tester');
      res.send(200)
    } catch(err) {
      res.send(500);
    }
  }
})

app.get('/api/test', (req, res) => {
  res.send('test');
});
app.post('/api/datas', upload.single('file'), (req, res) => {
  console.log(req.file)
  
  
});

app.listen(3000, () => console.log('Connect'));
