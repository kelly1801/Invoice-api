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
    this.whitelist = ['http://localhost:5173', '*']
    this.corsOptions = {
      origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(this.corsOptions));
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
