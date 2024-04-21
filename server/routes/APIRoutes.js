import { Router } from "express";
import { 
    show as userShow, 
    create as userCreate, 
    update as userUpdate 
} from "../controllers/UsersController.js";
import { 
    isAuthenticated, 
    authenticate as userAuthenticate, 
    logout as userLogout 
} from "../controllers/AuthenticationController.js";
import { 
    requestToken, 
    authenticate as applicationAuthenticate 
} from "../controllers/ApplicationController.js";
import { upload } from "./UserRoutes.js";
import SavingsRoutes from "../routes/SavingsRoutes.js"; // Ensure this file exists
import AccountRoutes from "../routes/AccountRoutes.js"; // Ensure this file exists
import TransactionRoutes from "../routes/TransactionRoutes.js"; // Ensure this file exists
import BudgetRoutes from "../routes/BudgetRoutes.js"; // Ensure this file exists

const router = Router();

router.use((req, res, next) => {
    if (req.headers["accept"] !== "application/json") {
        req.headers["accept"] = "application/json";
        res.status(406).send("Not Acceptable");
    } else {
        next();
    }
});

router.post("/authenticate", requestToken);

router.use("/savings", applicationAuthenticate, isAuthenticated, SavingsRoutes);
router.use("/accounts", applicationAuthenticate, isAuthenticated, AccountRoutes);
router.use("/transactions", applicationAuthenticate, isAuthenticated, TransactionRoutes);
router.use("/budgets", applicationAuthenticate, isAuthenticated, BudgetRoutes);

router.get("/users/:id", applicationAuthenticate, isAuthenticated, userShow);
router.post("/users", applicationAuthenticate, upload.single("avatar"), userCreate);
router.put("/users/:id", applicationAuthenticate, upload.single("avatar"), userUpdate);
router.post("/users/authenticate", applicationAuthenticate, userAuthenticate);
router.post("/users/logout", applicationAuthenticate, isAuthenticated, userLogout);

export default router;
