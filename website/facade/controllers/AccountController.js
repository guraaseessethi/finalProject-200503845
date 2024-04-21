import AccountService from "../services/AccountService.js";

export const index = async (req, res) => {
    try {
        const accounts = await AccountService.index(req.headers.cookie);
        res.json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving accounts' });
    }
};

export const show = async (req, res) => {
    try {
        const account = await AccountService.show(req.params.id, req.headers.cookie);
        res.json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving account' });
    }
};

export const create = async (req, res) => {
    try {
        const account = await AccountService.create(req.body, req.headers.cookie);
        res.json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating account' });
    }
};

export const update = async (req, res) => {
    try {
        const account = await AccountService.update(req.params.id, req.body, req.headers.cookie);
        res.json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating account' });
    }
};

export const destroy = async (req, res) => {
    try {
        await AccountService.destroy(req.params.id, req.headers.cookie);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting account' });
    }
};
