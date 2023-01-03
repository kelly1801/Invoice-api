import { Router } from "express";
import { check } from "express-validator";
import {
  invoicePost,
  getAllInvoices,
  getSingleInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoicesByStatus,
} from "../controllers/invoices.controllers.js";
import {
  isValidId,
  validateFields,
  isValidStatus,
} from "../middlewares/middlewares.js";
export const router = Router();

router.get("/", getAllInvoices);
router.get("/:ID", [check("ID").notEmpty(), validateFields], getSingleInvoice);
router.get("/filter/:stats", getInvoicesByStatus);
router.post("/", invoicePost);
router.put(
  "/:ID",
  [check("ID").notEmpty(), validateFields],
  updateInvoice
);
router.delete(
  "/:ID",
  [check("ID").notEmpty(), validateFields],
  deleteInvoice
);
