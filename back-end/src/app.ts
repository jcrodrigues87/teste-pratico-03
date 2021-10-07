import express from 'express';
import cors from 'cors';
import { router } from './routes/index';

import './database';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.get('/', (request, response) => response.json({ message: 'teste-pratico-03' }));



export { app };