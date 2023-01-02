import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database online");
  } catch (err) {
    console.log(err);
    throw new Error("error initializing the databse");
  }
};
