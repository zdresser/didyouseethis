import express, { Request, Response } from "express";
import { User } from "./models/user";

const router = express.Router();

router.get("/api", [], (req: Request, res: Response) => {
  return res.send("Here is some junk");
});

export { router };
