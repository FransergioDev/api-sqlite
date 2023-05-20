
import fs from 'fs';
import https from 'https';
import app from './app.js';

app.listen(3000, () => console.log('Run API'));

https.createServer({
    cert: fs.readFileSync('src/ssl/code.crt'),
    key: fs.readFileSync('src/ssl/code.key')
}, app).listen(3001, () => console.log('Run API in HTTPS'));