import { Router } from "express";
import { invoicePost, getAllInvoices } from "../controllers/invoices.controllers.js";
export const router = Router();

router.get("/", getAllInvoices);

router.post("/", invoicePost)
