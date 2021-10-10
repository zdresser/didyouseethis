"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import mongoose from "mongoose";
// import cors from "cors";
// import router from "./router";
// mongoose.connect("mongodb://localhost/DidYouSeeThis");
const app = (0, express_1.default)();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// router(app);
const server = app.listen(5000, () => {
    console.log("Server listening on port " + 5000);
});
