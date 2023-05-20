import cors from 'cors';
import express from 'express';
import router from './routes.js';

const app = express();
app.use(express.json()).use(cors());
app.use(router);

export default app;

