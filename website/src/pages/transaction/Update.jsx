import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/transactions/${id}`);
            setAmount(response.data.amount);
            setDate(response.data.date);
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = {
            amount,
            date,
        };
        await axios.put(`/api/transactions/${id}`, transaction);
        navigate("/transactions");
    };

    return (
        <div className="container">
            <PageTitle title="Update Transaction" />
            <h1>Update Transaction</h1>
            <hr className="my-3" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
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
