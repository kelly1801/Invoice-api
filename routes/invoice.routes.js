import { Router } from "express";
import { invoicePost } from "../controllers/invoices.controllers.js";
export const router = Router();

router.get("/", (req, res) => {
  res.json({
    msg: "all good",
  });
});

router.post("/", invoicePost)
