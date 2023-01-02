import { Router } from "express";
import { invoicePost, getAllInvoices, getSingleInvoice, updateInvoice, deleteInvoice } from "../controllers/invoices.controllers.js";
export const router = Router();

router.get("/", getAllInvoices);
router.get("/:ID", getSingleInvoice);
router.post("/", invoicePost)
router.put("/:ID", updateInvoice)
router.delete("/:ID", deleteInvoice)