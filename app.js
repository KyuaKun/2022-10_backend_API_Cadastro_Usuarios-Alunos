import dotenv from "dotenv";
dotenv.config();

import "./src/database";

import express from "express";
import UserRoutes from "./src/routes/userRoutes";
import TokenRoutes from "./src/routes/tokenRoutes";

export class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/users", UserRoutes);
    this.app.use("/auth", TokenRoutes);
  }
}

export default new App().app;
