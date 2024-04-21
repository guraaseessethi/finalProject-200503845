// Savings.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Savings.module.css';

const Savings = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const fetchGoals = async () => {
            const response = await axios.get("/api/savings");
            setGoals(response.data);
        };
        fetchGoals();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Savings Goals</h1>
            <ul>
                {goals.map(goal => (
                    <li key={goal.id}>
                        {goal.name} - Target: ${goal.targetAmount}, Saved: ${goal.savedAmount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Savings;
