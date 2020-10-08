import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes";
import { createConnection } from "typeorm";

const App = express();

createConnection().then(() => console.log("BD está conectado"));

App.use(express.json());
App.use(Routes);

App.listen(3000, () => console.log("Servidor rodando na porta", 3000));
