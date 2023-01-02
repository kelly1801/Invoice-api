import { Invoice } from "../models/invoice.model.js";
export const invoicePost = async (req, res) => {
  // extract the invoice data

  const body = req.body;
  const invoice = new Invoice(body);

  await invoice.save();
  res.json({
    msg: "invoice created successfully",
    invoice,
  });
  // save it in the db

  // do the response
};
