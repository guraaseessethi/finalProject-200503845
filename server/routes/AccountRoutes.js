import { Router } from "express";
import cors from "cors";
import { isAuthenticated } from "../controllers/AuthenticationController.js";
import {
    getAccounts,
    addAccountForm, // renamed from addAccount
    showAccountDetails, // renamed from showAccount
    editAccountForm, // renamed from editAccount
    createAccount,
    updateAccount,
    deleteAccount
} from "../controllers/AccountController.js";

const router = Router();
const corsOptions = { origin: process.env.HOST || "http://localhost", optionsSuccessStatus: 200 };

router.use(isAuthenticated); // Authentication middleware for all account routes

// Account management routes with appropriate CORS and authentication setup
router.get("/", cors(corsOptions), getAccounts); // Retrieve all accounts
router.get("/new", cors(corsOptions), addAccountForm); // Form to add a new account
router.get("/:id", showAccountDetails); // Display a specific account's details
router.get("/:id/edit", cors(corsOptions), editAccountForm); // Form to edit a specific account
router.post("/", cors(corsOptions), createAccount); // Create a new account
router.put("/:id", cors(corsOptions), updateAccount); // Update an existing account
router.delete("/:id", cors(corsOptions), deleteAccount); // Delete an existing account

export default router;
