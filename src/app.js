import express from 'express';
import router from './routes.js';

const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send("API de Contatos em NodeJS, Express e SqLite"));
app.use(router);
app.listen(3000, () => console.log('Run API'));