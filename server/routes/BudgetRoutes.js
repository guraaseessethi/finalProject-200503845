import { Router } from "express";
import cors from "cors";
import { isAuthenticated } from "../controllers/AuthenticationController.js";
import {
    getBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
    addBudgetForm,
    editBudgetForm,
    showBudgetDetails
} from "../controllers/BudgetController.js";

const router = Router();
const corsOptions = { origin: process.env.HOST || "http://localhost", optionsSuccessStatus: 200 };

router.use(isAuthenticated); // Middleware to authenticate all budget routes

// CORS Middleware applied only to specific routes that need it
router.get("/", cors(corsOptions), getBudgets); // Get all budgets
router.get("/new", cors(corsOptions), addBudgetForm); // Form for adding a new budget
router.get("/:id", cors(corsOptions), showBudgetDetails); // Show details of a specific budget
router.get("/:id/edit", cors(corsOptions), editBudgetForm); // Form for editing a specific budget
router.post("/", cors(corsOptions), createBudget); // Create a new budget
router.put("/:id", cors(corsOptions), updateBudget); // Update an existing budget
router.delete("/:id", cors(corsOptions), deleteBudget); // Delete an existing budget

export default router;

