import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";

const Index = () => {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/budgets");
            setBudgets(response.data);
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <PageTitle title="Budgets" />
            <h1>Budgets</h1>
            <hr className="my-3" />
            <div className="d-flex flex-wrap justify-content-center">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {budgets.map((budget, index) => (
                            <tr key={index}>
                                <td>{budget.name}</td>
                                <td>${budget.amount}</td>
                                <td>
                                    <Link to={`/budgets/${budget.id}`}>View</Link>&nbsp;|&nbsp;
                                    <Link to={`/budgets/${budget.id}/update`}>Update</Link>&nbsp;|&nbsp;
                                    <Link to={`/budgets/${budget.id}/delete`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
