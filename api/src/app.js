import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../src/routes/index'

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.HOST, credentials: true }));
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

export default app;