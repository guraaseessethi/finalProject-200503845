import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import styles from "./Budget.module.css";

const Show = () => {
    axios.defaults.withCredentials = true;
    
    const { id } = useParams();
    const [budget, setBudget] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const budgetResp = await axios.get(`/api/budgets/${id}`);
            setBudget(budgetResp.data);
        };

        fetchData();
    }, [id]);

    return (
        <div className="container">
            <PageTitle title="Budget Details" />

            <h1>Budget</h1>
            <hr className="my-3" />

            <div className="d-flex flex-wrap justify-content-center">
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>{budget.name}</h5>
                        <p className={styles.cardText}>Amount: ${budget.amount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
