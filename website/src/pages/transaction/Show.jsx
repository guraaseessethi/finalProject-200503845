import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import styles from "./Transaction.module.css";

const Show = () => {
    axios.defaults.withCredentials = true;
    
    const { id } = useParams();
    const [transaction, setTransaction] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const transactionResp = await axios.get(`/api/transactions/${id}`);
            setTransaction(transactionResp.data);
        };

        fetchData();
    }, [id]);

    return (
        <div className="container">
            <PageTitle title="Transaction Details" />

            <h1>Transaction</h1>
            <hr className="my-3" />

            <div className="d-flex flex-wrap justify-content-center">
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>Amount: ${transaction.amount}</h5>
                        <p className={styles.cardText}>Date: {transaction.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
