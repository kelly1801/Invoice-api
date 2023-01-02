import Invoice from "../models/invoice.model.js";
import { generateId } from "../utils/assign-id.js";
export const getAllInvoices = async (req, res) => {
  const { limit = 5, from = 0 } = req.query;

  const [total, invoices] = await Promise.all([
    Invoice.countDocuments(),
    Invoice.find().skip(Number(from)).limit(Number(limit)),
  ]);

  res.json({
    total,
    invoices,
  });
};

export const getSingleInvoice = async (req, res) => {
  const { ID } = req.params;
  const invoice = await Invoice.find({ ID });

  res.json({
    invoice,
  });
};
export const invoicePost = async (req, res) => {
  // extract the invoice data

  const { body } = req;

  // save it in the db
  const invoice = new Invoice(body);
  invoice.ID = generateId();
  await invoice.save();

  // do the response
  res.json({
    msg: "invoice created successfully",
    invoice,
  });
};

export const updateInvoice = async (req, res) => {
  const { ID } = req.params;
  const { body } = req;

  const invoice = await Invoice.findOneAndUpdate({ ID }, body);

  res.json({
    invoice,
  });
};

export const deleteInvoice = async (req, res) => {
  const { ID } = req.params;
  const invoice = await Invoice.findOneAndRemove({ ID });

  res.json({
    msg: "succesful delete",
    invoice,
  });
};
