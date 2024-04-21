import APIProvider from "../utilities/APIProvider.js";

const SavingsService = (async () => {
    const apiProvider = await APIProvider();

    return {
        index: async (cookies) => {
            try {
                const response = await apiProvider.get("/budgets", {
                    headers: { Cookie: cookies }
                });
                return response.data || [];
            } catch (error) {
                throw error;
            }
        },
        show: async (id, cookies) => {
            try {
                const response = await apiProvider.get(`/budgets/${id}`, {
                    headers: { Cookie: cookies }
                });
                return response.data || {};
            } catch (error) {
                throw error;
            }
        },
        create: async (budget, cookies) => {
            try {
                const response = await apiProvider.post("/budgets", budget, {
                    headers: { Cookie: cookies }
                });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        update: async (id, budget, cookies) => {
            try {
                const response = await apiProvider.put(`/budgets/${id}`, budget, {
                    headers: { Cookie: cookies }
                });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        destroy: async (id, cookies) => {
            try {
                await apiProvider.delete(`/budgets/${id}`, {
                    headers: { Cookie: cookies }
                });
            } catch (error) {
                throw error;
            }
        }
    };
})();

export default SavingsService;
