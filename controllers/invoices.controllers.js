import  Invoice  from "../models/invoice.model.js";

export const getAllInvoices = async(req, res) => {

    const { limit = 5, from = 0 } = req.query;
  
    const [total, invoices] = await Promise.all([
        Invoice.countDocuments(),
        Invoice.find().skip(Number(from)).limit(Number(limit)),
      ]);
    
      res.json({
        total,
        invoices,
      });
}
export const invoicePost = async (req, res) => {
  // extract the invoice data

  const body = req.body;
  // save it in the db
  const invoice = new Invoice(body);

  await invoice.save();

  // do the response
  res.json({
    msg: "invoice created successfully",
    invoice,
  });
};


