import express from "express";
import cors from "cors";
import { dbConnection } from "../db/connect-db.js";
import { router } from "../routes/invoice.routes.js";
export default class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8081;
    this.paths = {
      invoices: "/api/invoices",
    };

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors({ origin: "*" }));
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }

  async connectDB() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.paths.invoices, router);
  }
  listenPort() {
    this.app.listen(process.env.PORT, () => {
      console.log(`server running on port: ${this.port}`);
    });
  }
}
