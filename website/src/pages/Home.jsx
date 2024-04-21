import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.pageTitle}>Welcome to Personal Finance Manager</h1>
            <p className={styles.pageContent}>
                Take control of your finances with easy budgeting, tracking, and planning. Start your journey towards financial freedom today.
            </p>
        </div>
    );
};

export default Home;
