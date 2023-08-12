import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

const routerSwagger = Router();
routerSwagger.use("/", swaggerUI.serve);
routerSwagger.get("/", swaggerUI.setup(swaggerDocument));

export default routerSwagger;
