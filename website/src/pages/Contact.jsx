import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.content}>
                Questions or feedback? Our team is eager to assist you. Don't hesitate to reach out to us for any support or inquiries.
            </p>
        </div>
    );
};

export default Contact;
