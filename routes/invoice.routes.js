import { Router } from "express";
import { invoicePost, getAllInvoices, getSingleInvoice } from "../controllers/invoices.controllers.js";
export const router = Router();

router.get("/", getAllInvoices);
router.get("/:ID", getSingleInvoice);
router.post("/", invoicePost)
