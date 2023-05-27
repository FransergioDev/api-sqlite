
import fs from 'fs';
import https from 'https';
import app from './app.js';

const port = 3000;
const portSSL = 3001;

if (process.env.NODE_ENV !== 'test') app.listen(port, () => console.log(`Run API: Server running on port ${port}`));

https.createServer({
    cert: fs.readFileSync('src/ssl/code.crt'),
    key: fs.readFileSync('src/ssl/code.key')
}, app).listen(portSSL, () => console.log(`Run API HTTPS: Server running on port ${portSSL}`));