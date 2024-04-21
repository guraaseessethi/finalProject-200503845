import { Router } from "express";
import cors from "cors";
import { isAuthenticated } from "../controllers/AuthenticationController.js";
import {
    getTransactions,
    addTransactionForm, 
    showTransactionDetails,
    editTransactionForm, 
    createTransaction,
    updateTransaction,
    deleteTransaction
} from "../controllers/TransactionController.js";

const router = Router();
const corsOptions = { origin: process.env.HOST || "http://localhost", optionsSuccessStatus: 200 };

router.use(isAuthenticated); // Apply authentication middleware to all routes

// Configure routes with appropriate middleware
router.get("/", cors(corsOptions), getTransactions); // Fetch all transactions
router.get("/new", cors(corsOptions), addTransactionForm); // Display form to add a new transaction
router.get("/:id", showTransactionDetails); // Display details of a specific transaction
router.get("/:id/edit", cors(corsOptions), editTransactionForm); // Display form to edit a specific transaction
router.post("/", cors(corsOptions), createTransaction); // Submit data to create a new transaction
router.put("/:id", cors(corsOptions), updateTransaction); // Submit updated data for an existing transaction
router.delete("/:id", cors(corsOptions), deleteTransaction); // Delete a specific transaction

export default router;
