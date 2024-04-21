import { Router } from "express";
import * as BudgetController from "./facade/controllers/BudgetsController.js";
import * as SavingsController from "./facade/controllers/SavingsController.js";
import * as TransactionController from "./facade/controllers/TransactionController.js";
import * as AccountController from "./facade/controllers/AccountController.js";

const router = Router();

// Budget routes
router.get("/budgets", BudgetController.index);
router.get("/budgets/:id", BudgetController.show);
router.post("/budgets", BudgetController.create);
router.put("/budgets/:id", BudgetController.update);
router.delete("/budgets/:id", BudgetController.destroy);

// Savings routes
router.get("/savings", SavingsController.index);
router.get("/savings/:id", SavingsController.show);
router.post("/savings", SavingsController.create);
router.put("/savings/:id", SavingsController.update);
router.delete("/savings/:id", SavingsController.destroy);

// Transaction routes
router.get("/transactions", TransactionController.index);
router.get("/transactions/:id", TransactionController.show);
router.post("/transactions", TransactionController.create);
router.put("/transactions/:id", TransactionController.update);
router.delete("/transactions/:id", TransactionController.destroy);

// Account routes
router.get("/accounts", AccountController.index);
router.get("/accounts/:id", AccountController.show);
router.post("/accounts", AccountController.create);
router.put("/accounts/:id", AccountController.update);
router.delete("/accounts/:id", AccountController.destroy);

export default router;
