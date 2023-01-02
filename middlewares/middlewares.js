import Invoice from "../models/invoice.model.js";
import { validationResult } from "express-validator";

export const isValidId = async (ID) => {
  const invoice = await Invoice.findOne({ ID });
  if (!invoice) {
    throw new Error(`there is no invoice with id: ${ID}`);
  }
};

export const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
