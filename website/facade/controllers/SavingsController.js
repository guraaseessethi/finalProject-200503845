import SavingsService from "../services/SavingsService.js";

export const index = async (req, res) => {
    try {
        const savings = await SavingsService.index(req.headers.cookie);
        res.json(savings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving savings goals' });
    }
};

export const show = async (req, res) => {
    try {
        const saving = await SavingsService.show(req.params.id, req.headers.cookie);
        res.json(saving);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving savings goal' });
    }
};

export const create = async (req, res) => {
    try {
        const saving = await SavingsService.create(req.body, req.headers.cookie);
        res.json(saving);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating savings goal' });
    }
};

export const update = async (req, res) => {
    try {
        const saving = await SavingsService.update(req.params.id, req.body, req.headers.cookie);
        res.json(saving);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating savings goal' });
    }
};

export const destroy = async (req, res) => {
    try {
        await SavingsService.destroy(req.params.id, req.headers.cookie);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting savings goal' });
    }
};
