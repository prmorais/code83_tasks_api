import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes";

const App = express();

App.use(express.json());
App.use(Routes);

App.listen(3000, () => console.log("Servidor rodando na porta", 3000));
