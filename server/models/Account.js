import mongoose, { Schema } from "mongoose";

const AccountSchema = new Schema({
  accountType: {
    type: String,
    enum: ["CHECKING", "SAVINGS", "CREDIT", "INVESTMENT"],
    required: [true, "Account type is required"],
  },
  balance: {
    type: Number,
    required: [true, "Balance is required"],
    min: [0, "Balance cannot be negative"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User reference is required"],
  },
}, { timestamps: true });

export default mongoose.model("Account", AccountSchema);
