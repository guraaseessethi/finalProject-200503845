import Transaction from "../models/Transaction.js";

export const getTransactions = async (req, res, next) => {
    try {
        const accountTransactions = await Transaction.find({ account: req.params.accountId });
        res.json(accountTransactions);
    } catch (error) {
        next(error);
    }
};

export const createTransaction = async (req, res, next) => {
    try {
        const newTransaction = new Transaction({ ...req.body, account: req.params.accountId });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        next(error);
    }
};

export const updateTransaction = async (req, res, next) => {
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        );
        res.json(updatedTransaction);
    } catch (error) {
        next(error);
    }
};

export const deleteTransaction = async (req, res, next) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Transaction successfully deleted' });
    } catch (error) {
        next(error);
    }
};

export const addTransactionForm = async (req, res) => {
    res.render("transactions/add", { formType: "create", title: "Add Transaction" });
};

export const editTransactionForm = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            res.status(404).send("Transaction not found");
            return;
        }
        res.render("transactions/edit", { transaction, formType: "update", title: "Edit Transaction" });
    } catch (error) {
        next(error);
    }
};

export const showTransactionDetails = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id).populate("account");
        res.format({
            "text/html": () => {
                res.render("transactions/show", { transaction, title: "Transaction Details" });
            },
            "application/json": () => {
                res.json({ transaction });
            },
            default: () => {
                res.status(406).send("Not Acceptable");
            }
        });
    } catch (error) {
        next(error);
    }
};
