import { Router } from "express";
import { check } from "express-validator";
import {
  invoicePost,
  getAllInvoices,
  getSingleInvoice,
  updateInvoice,
  deleteInvoice,
} from "../controllers/invoices.controllers.js";
import { isValidId, validateFields } from "../middlewares/middlewares.js";
export const router = Router();

router.get("/", getAllInvoices);
router.get(
  "/:ID",
  [isValidId, check("ID").notEmpty(), validateFields],
  getSingleInvoice
);
router.post("/", invoicePost);
router.put(
  "/:ID",
  [isValidId, check("ID").notEmpty(), validateFields],
  updateInvoice
);
router.delete(
  "/:ID",
  [isValidId, check("ID").notEmpty(), validateFields],
  deleteInvoice
);
