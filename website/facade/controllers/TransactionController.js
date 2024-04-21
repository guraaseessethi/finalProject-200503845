import TransactionService from "../services/TransactionService.js";

export const index = async (req, res) => {
    try {
        const transactions = await TransactionService.index(req.headers.cookie);
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving transactions' });
    }
};

export const show = async (req, res) => {
    try {
        const transaction = await TransactionService.show(req.params.id, req.headers.cookie);
        res.json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving transaction' });
    }
};

export const create = async (req, res) => {
    try {
        const transaction = await TransactionService.create(req.body, req.headers.cookie);
        res.json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating transaction' });
    }
};

export const update = async (req, res) => {
    try {
        const transaction = await TransactionService.update(req.params.id, req.body, req.headers.cookie);
        res.json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating transaction' });
    }
};

export const destroy = async (req, res) => {
    try {
        await TransactionService.destroy(req.params.id, req.headers.cookie);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting transaction' });
    }
};
