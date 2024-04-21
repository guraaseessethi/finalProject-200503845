import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [goalName, setGoalName] = useState("");
    the [targetAmount, setTargetAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/savings/${id}`);
            setGoalName(response.data.goalName);
            setTargetAmount(response.data.targetAmount);
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const savings = {
            goalName,
            targetAmount,
        };
        await axios.put(`/api/savings/${id}`, savings);
        navigate("/savings");
    };

    return (
        <div className="container">
            <PageTitle title="Update Savings Goal" />
            <h1>Update Savings Goal</h1>
            <hr className="my-3" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="goalName">Goal Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="goalName"
                        value={goalName}
                        onChange={(e) => setGoalName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="targetAmount">Target Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="targetAmount"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(parseFloat(e.target.value))}
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
