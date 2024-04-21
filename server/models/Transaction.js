import mongoose, { Schema } from "mongoose";

const TransactionSchema = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: [true, "Account reference is required"],
  },
  transactionType: {
    type: String,
    enum: ["DEPOSIT", "WITHDRAWAL", "TRANSFER"],
    required: [true, "Transaction type is required"],
  },
  amount: {
    type: Number,
    required: [true, "Transaction amount is required"],
    min: [0, "Transaction amount cannot be negative"],
  },
}, { timestamps: true });

export default mongoose.model("Transaction", TransactionSchema);
