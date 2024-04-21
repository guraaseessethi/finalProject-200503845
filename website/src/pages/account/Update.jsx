import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/accounts/${id}`);
            setAccountType(response.data.accountType);
            setBalance(response.data.balance);
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const account = {
            accountType,
            balance,
        };
        await axios.put(`/api/accounts/${id}`, account);
        navigate("/accounts");
    };

    return (
        <div className="container">
            <PageTitle title="Update Account" />
            <h1>Update Account</h1>
            <hr className="my-3" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="accountType">Account Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="accountType"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input
                        type="number"
                        className="form-control"
                        id="balance"
                        value={balance}
                        onChange={(e) => setBalance(parseFloat(e.target.value))}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
