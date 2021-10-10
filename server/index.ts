import express from "express";
import mongoose from "mongoose";
// import cors from "cors";
import { router } from "./router";

mongoose.connect("mongodb://localhost/DidYouSeeThis", () => {
  console.log("connected to database");
});

const app = express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const server = app.listen(5000, () => {
  console.log("Server listening on port " + 5000);
});
