import BudgetService from "../services/BudgetService.js";

export const index = async (req, res) => {
    try {
        const budgets = await BudgetService.index(req.headers.cookie);
        res.json(budgets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving budgets' });
    }
};

export const show = async (req, res) => {
    try {
        const budget = await BudgetService.show(req.params.id, req.headers.cookie);
        res.json(budget);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving budget' });
    }
};

export const create = async (req, res) => {
    try {
        const budget = await BudgetService.create(req.body, req.headers.cookie);
        res.json(budget);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating budget' });
    }
};

export const update = async (req, res) => {
    try {
        const budget = await BudgetService.update(req.params.id, req.body, req.headers.cookie);
        res.json(budget);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating budget' });
    }
};

export const destroy = async (req, res) => {
    try {
        await BudgetService.destroy(req.params.id, req.headers.cookie);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting budget' });
    }
};
