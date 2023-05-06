import { openDb } from './../config/configDB.js';
import express from 'express';

const app = express();

openDb();

app.use(express.json());
app.get('/', (req, res) => {
    res.send("API de Contatos em NodeJS, Express e SqLite");
});

app.post('/contacts', (req, res) => {
    console.log(req.body);
    res.json({
        "statusCode" : 200
    })
});

app.listen(3000, () => console.log('Run API'));