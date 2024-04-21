import Account from "../models/Account.js";

export const getAccounts = async (req, res, next) => {
    try {
        const userAccounts = await Account.find({ user: req.user._id });
        res.json(userAccounts);
    } catch (error) {
        next(error);
    }
};

export const createAccount = async (req, res, next) => {
    try {
        const newAccount = new Account({ ...req.body, user: req.user._id });
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        next(error);
    }
};

export const updateAccount = async (req, res, next) => {
    try {
        const updatedAccount = await Account.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        );
        res.json(updatedAccount);
    } catch (error) {
        next(error);
    }
};

export const deleteAccount = async (req, res, next) => {
    try {
        await Account.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Account successfully deleted' });
    } catch (error) {
        next(error);
    }
};

export const addAccountForm = async (req, res) => {
    res.render("accounts/add", { formType: "create", title: "Add Account" });
};

export const editAccountForm = async (req, res, next) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            res.status(404).send("Account not found");
            return;
        }
        res.render("accounts/edit", { account, formType: "update", title: "Edit Account" });
    } catch (error) {
        next(error);
    }
};

export const showAccountDetails = async (req, res, next) => {
    try {
        const account = await Account.findById(req.params.id).populate("user");
        res.format({
            "text/html": () => {
                res.render("accounts/show", { account, title: "Account Details" });
            },
            "application/json": () => {
                res.json({ account });
            },
            default: () => {
                res.status(406).send("Not Acceptable");
            }
        });
    } catch (error) {
        next(error);
    }
};
