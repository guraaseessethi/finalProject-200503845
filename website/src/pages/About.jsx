import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>About Personal Finance Manager</h1>
            <p className={styles.content}>
                Our mission is to empower individuals to make informed financial decisions and achieve their financial goals. With Personal Finance Manager, managing your finances is simpler and more intuitive than ever before.
            </p>
        </div>
    );
};

export default About;
