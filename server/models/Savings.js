import mongoose, { Schema } from "mongoose";

const SavingsSchema = new Schema({
  balance: {
    type: Number,
    required: [true, "Balance is required"],
    min: [0, "Balance cannot be negative"],
  },
  goal: {
    type: Number,
    required: [true, "Savings goal is required"],
    min: [0, "Savings goal cannot be negative"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User reference is required"],
  },
}, { timestamps: true });

export default mongoose.model("Savings", SavingsSchema);
