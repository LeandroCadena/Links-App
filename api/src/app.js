import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../src/routes/index';
import multer from 'multer';
import Link from './models/Link';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1920 * 1080
    }
});

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.HOST, credentials: true }));
app.use(express.urlencoded({ extended: false }));

app.post('/add', upload.single('image'), async (req, res) => {
    const linkCard = {
        name: req.body.name,
        url: req.body.url,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    Link.create(linkCard, (err, item) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else {
            res.status(200).send(item)
        }
    })
});

export default app;