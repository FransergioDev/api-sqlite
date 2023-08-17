import fs from "fs";
import https from "https";
import app from "./app.js";
import graphqlStartServer from "./graphql.js";
//import swaggerJSDoc from 'swagger-jsdoc';

const port = process.env.PORT || 3000;
const portSSL = 3001;

/*
const swaggerDefinition = {
    info: {
        title: 'Documentação da API Contatos em NodeJS, Express e SqLite com Swagger',
        description: 'Endpoints to test the user registration routes',
        version: '1.0.0'
    },
    host: `localhost:${port}`,
    basePath: '/v1',
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('./swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));*/

if (process.env.NODE_ENV !== "test")
  app.listen(port, () =>
    console.log(`Run API: Server running on port ${port}`)
  );

https
  .createServer(
    {
      cert: fs.readFileSync("src/ssl/code.crt"),
      key: fs.readFileSync("src/ssl/code.key"),
    },
    app
  )
  .listen(portSSL, () =>
    console.log(`✅ Run API HTTPS: Server running on port ${portSSL}`)
  );

graphqlStartServer();
