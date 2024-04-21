import mongoose from "mongoose";

const { Schema } = mongoose;

const BudgetSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [100, "Title cannot exceed 100 characters"]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [0, "Amount cannot be negative"]
    },
    startDate: {
        type: Date,
        required: true
      },
    endDate: {
        type: Date
    },
}, { timestamps: true });

export default mongoose.model("Budget", BudgetSchema);
