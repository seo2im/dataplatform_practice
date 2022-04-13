import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `${__dirname}/../public/${req.query.userid}`;

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})

export default multer({ storage });
