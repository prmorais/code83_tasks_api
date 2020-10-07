import { Request, Response, Router } from "express";

const Routes = Router();

Routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Olá Mundo" });
});

export default Routes;
