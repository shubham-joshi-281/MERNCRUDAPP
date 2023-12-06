import mongoose from "mongoose";

const crudSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email Is Required"],
      trim: true,
      unique: true,
    },
    age: {
      type: Number,
      required: [true, "Age Is Required"],
    },
    contact: {
      type: Number,
      required: [true, "Contact Is Required"],
    },
    address: {
      type: String,
      required: [true, "Address Is Required"],
    },
  },
  { timestamps: true }
);

const crudModels = mongoose.model("crud", crudSchema);

export default crudModels;
