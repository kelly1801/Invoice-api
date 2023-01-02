import { Schema, model } from "mongoose";

const senderAddressSchema = Schema({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  postCode: {
    type: String,
  },
  country: {
    type: String,
  },
});
const clientAddressSchema = Schema({
  clientStreet: {
    type: Object,
  },
  clientCity: {
    type: String,
  },
  clientPostCode: {
    type: String,
  },
  clientCountry: {
    type: String,
  },
});
const ItemsSchema = Schema({
  itemName: {
    type: String,
  },
  price: {
    type: Number,
  },
  projectDescription: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

const InvoiceSchema = Schema({
  ID: {
    type: String,
    required: [true, "ID is mandatory"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
  },
  paymentTerms: {
    type: Number,
  },
  clientName: {
    type: String,
  },
  clientEmail: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Draft", "Pending", "Paid"],
  },

  senderAddress: senderAddressSchema,
  clientAddress: clientAddressSchema,
  items: [ItemsSchema],

  Total: {
    type: Number,
  },
});

export const Invoice = model("Invoice", InvoiceSchema);
