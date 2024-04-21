import Savings from "../models/Savings.js";

export const index = async (req, res, next) => {
    try {
        const savings = await Savings.find().populate("user");
        res.format({
            "text/html": () => {
                res.render("savings/index", { savings, title: "Savings List" });
            },
            "application/json": () => {
                res.json({ savings });
            },
            default: () => {
                res.status(406).send("NOT ACCEPTABLE");
            }
        });
    } catch (error) {
        next(error);
    }
};

export const showSavings = async (req, res, next) => {
    try {
        const saving = await Savings.findById(req.params.id).populate("user");
        res.format({
            "text/html": () => {
                res.render("savings/show", { saving, title: "Saving Details" });
            },
            "application/json": () => {
                res.json({ saving });
            },
            default: () => {
                res.status(406).send("NOT ACCEPTABLE");
            }
        });
    } catch (error) {
        next(error);
    }
};

export const addSavings = async (req, res, nect) => {
    res.render("savings/add", { formType: "create", title: "Add Savings" });
};

export const editSavings = async (req, res, next) => {
    try {
        const saving = await Savings.findById(req.params.id);
        if (!saving) {
            res.status(404);
            throw new Error("Saving not found");
        }
        res.render("savings/edit", { saving, formType: "update", title: "Edit Savings" });
    } catch (error) {
        next(error);
    }
};

export const createSavings = async (req, res, next) => {
    try {
        const { balance, goal } = req.body;
        const newSaving = new Savings({ balance, goal, user: req.user._id });
        await newSaving.save();
        res.redirect("/savings");
    } catch (error) {
        next(error);
    }
};

export const updateSavings = async (req, res, next) => {
    try {
        const saving = await Savings.findById(req.params.id);
        if (!saving) {
            res.status(404);
            throw new Error("Saving not found");
        }
        await Savings.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/savings");
    } catch (error) {
        next(error);
    }
};

export const deleteSavings = async (req, res, next) => {
    try {
        await Savings.findByIdAndDelete(req.params.id);
        res.redirect("/savings");
    } catch (error) {
        next(error);
    }
};
