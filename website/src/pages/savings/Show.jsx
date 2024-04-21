import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import styles from "./Savings.module.css";

const Show = () => {
    axios.defaults.withCredentials = true;
    
    const { id } = useParams();
    const [savings, setSavings] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const savingsResp = await axios.get(`/api/savings/${id}`);
            setSavings(savingsResp.data);
        };

        fetchData();
    }, [id]);

    return (
        <div className="container">
            <PageTitle title="Savings Goal Details" />

            <h1>Savings Goal</h1>
            <hr className="my-3" />

            <div className="d-flex flex-wrap justify-content-center">
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>{savings.goalName}</h5>
                        <p className={styles.cardText}>Target Amount: ${savings.targetAmount}</p>
                        <p className={styles.cardText}>Current Amount: ${savings.currentAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
