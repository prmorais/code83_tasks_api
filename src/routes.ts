import { Request, Response, Router } from "express";

import {
  getTask,
  getTasks,
  saveTask,
  updateTask,
  removeTask,
  finishedTask,
} from "./controller/TasksController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Olá Mundo" });
});

routes.get("/tasks", getTasks);

routes.get("/tasks/:id", getTask);
routes.post("/tasks", saveTask);

routes.put("/tasks/:id", updateTask);
routes.patch("/tasks/:id", finishedTask);
routes.delete("/tasks/:id", removeTask);

export default routes;
