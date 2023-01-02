import { Schema, model } from "mongoose";

const SenderAddressSchema = Schema({
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
const ClientAddressSchema = Schema({
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
    unique: true,
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
    enum: ["draft", "pending", "paid"],
  },

  senderAddress: SenderAddressSchema,
  clientAddress: ClientAddressSchema,
  items: [ItemsSchema],

  Total: {
    type: Number,
  },
});

  
InvoiceSchema.methods.toJSON = function () {
  const { __v, _id, ...invoice } = this.toObject();
  return invoice;
};

export default model("Invoice", InvoiceSchema);
