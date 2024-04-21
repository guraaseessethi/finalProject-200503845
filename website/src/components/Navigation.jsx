import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useAuth } from "../App"; 
const Navigation = () => {
    const { user } = useAuth(); 

    const pageLinks = [
        { label: "Home", link: "/", visible: true },
        { label: "About", link: "/about", visible: true },
        { label: "Contact", link: "/contact", visible: true },
        { label: "Dashboard", link: "/dashboard", visible: !!user }, 
        { label: "Budgets", link: "/budgets", visible: !!user },
        { label: "Accounts", link: "/accounts", visible: !!user },
        { label: "Transactions", link: "/transactions", visible: !!user },
        { label: "Register", link: "/register", visible: !user }, 
        { label: "Login", link: "/login", visible: !user },
        { label: "Logout", link: "/logout", visible: !!user } 
    ];

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${styles.brand}`} to="/">
                    Personal Finance Manager
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {pageLinks.filter(link => link.visible).map(({ label, link }, index) => (
                        <li className="nav-item" key={index}>
                            <Link className={`nav-link ${styles.navLink}`} to={link}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
