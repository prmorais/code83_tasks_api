import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm";
import * as cors from "cors";
// import * as bodyParser from "body-parser";
import Routes from "./routes";

const App = express();

createConnection().then(() => console.log("BD está conectado"));

App.use(cors({ origin: "*" }));
App.use(express.json());
App.use(Routes);

App.listen(3000, () => console.log("Servidor rodando na porta", 3000));
