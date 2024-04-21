import Budget from "../models/Budget.js";

export const getBudgets = async (req, res, next) => {
    try {
        const userBudgets = await Budget.find({ user: req.user._id });
        res.json(userBudgets);
    } catch (error) {
        next(error);
    }
};

export const createBudget = async (req, res, next) => {
    try {
        const newBudget = new Budget({ ...req.body, user: req.user._id });
        await newBudget.save();
        res.status(201).json(newBudget);
    } catch (error) {
        next(error);
    }
};

export const updateBudget = async (req, res, next) => {
    try {
        const updatedBudget = await Budget.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        );
        res.json(updatedBudget);
    } catch (error) {
        next(error);
    }
};

export const deleteBudget = async (req, res, next) => {
    try {
        await Budget.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Budget successfully deleted' });
    } catch (error) {
        next(error);
    }
};

export const addBudgetForm = async (req, res) => {
    res.render("budgets/add", { formType: "create", title: "Add Budget" });
};

export const editBudgetForm = async (req, res, next) => {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) {
            res.status(404).send("Budget not found");
            return;
        }
        res.render("budgets/edit", { budget, formType: "update", title: "Edit Budget" });
    } catch (error) {
        next(error);
    }
};

export const showBudgetDetails = async (req, res, next) => {
    try {
        const budget = await Budget.findById(req.params.id).populate("user");
        res.format({
            "text/html": () => {
                res.render("budgets/show", { budget, title: "Budget Details" });
            },
            "application/json": () => {
                res.json({ budget });
            },
            default: () => {
                res.status(406).send("Not Acceptable");
            }
        });
    } catch (error) {
        next(error);
    }
};
