import PageRoutes from "../routes/PageRoutes.js";
import UserRoutes from "../routes/UserRoutes.js";
import AuthenticationRoutes from "../routes/AuthenticationRoutes.js";
import ApplicationRoutes from "../routes/ApplicationRoutes.js";
import APIRoutes from "../routes/APIRoutes.js";
import SavingsRoutes from "../routes/SavingsRoutes.js";
import AccountRoutes from "../routes/AccountRoutes.js";
import TransactionRoutes from "../routes/TransactionRoutes.js";
import BudgetRoutes from "../routes/BudgetRoutes.js";

export default (app) => {
    app.use("/", PageRoutes);
    app.use("/", AuthenticationRoutes);
    app.use("/users", UserRoutes);
    app.use("/applications", ApplicationRoutes);
    app.use("/api", APIRoutes);
    app.use("/savings", SavingsRoutes);
    app.use("/accounts", AccountRoutes);
    app.use("/transactions", TransactionRoutes);
    app.use("/budgets", BudgetRoutes);
};
