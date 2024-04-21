import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import styles from "./Account.module.css";

const Show = () => {
    axios.defaults.withCredentials = true;
    
    const { id } = useParams();
    const [account, setAccount] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const accountResp = await axios.get(`/api/accounts/${id}`);
            setAccount(accountResp.data);
        };

        fetchData();
    }, [id]);

    return (
        <div className="container">
            <PageTitle title="Account Details" />

            <h1>Account</h1>
            <hr className="my-3" />

            <div className="d-flex flex-wrap justify-content-center">
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>{account.accountType}</h5>
                        <p className={styles.cardText}>Balance: ${account.balance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
