import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
      quantity: Number,
    },
  ],
  total: Number,
});

export default mongoose.model("Order", orderSchema);
