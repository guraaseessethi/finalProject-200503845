
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Accounts.module.css';

const Accounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            const response = await axios.get("/api/accounts");
            setAccounts(response.data);
        };
        fetchAccounts();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Account Balances</h1>
            <ul>
                {accounts.map(account => (
                    <li key={account.id}>
                        {account.name}: ${account.balance}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accounts;
