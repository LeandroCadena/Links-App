import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index.routes';

const app = express();

// Settings

app.set('port', process.env.PORT || 3001);

// Middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.urlencoded({ extended: false }));

// Routes

app.use('/', router);

export default app;