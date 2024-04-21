import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Transaction.module.css';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await axios.get("/api/transactions");
            setTransactions(response.data);
        };
        fetchTransactions();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Transactions</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Account</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>${transaction.amount}</td>
                            <td>{transaction.account}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transaction;
