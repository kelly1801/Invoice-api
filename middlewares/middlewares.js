import Invoice from "../models/invoice.model.js";
import { validationResult } from "express-validator";
import { response, request } from "express";

export const isValidId = async (ID) => {
  const invoice = await Invoice.findOne({ ID });
  if (!invoice) {
    throw new Error(`there is no invoice with id: ${ID}`);
  }
};

export const isValidStatus = (req = request, res = response, next) => {
  const { stats } = req.params
  console.log(req.params)
  const statusCollection = ["paid", "draft", "pending"];

  if (!statusCollection.includes(stats)) {
    return res.status(400).json({
      msg: `${stats} is not a valid status`,
      statusCollection
    });
  }

  next();
};

export const validateFields = (req = request, res = response, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
