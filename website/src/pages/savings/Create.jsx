import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const Create = () => {
    const [goalName, setGoalName] = useState('');
    const [targetAmount, setTargetAmount] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const savingsGoal = { goalName, targetAmount };
        await axios.post('/api/savings', savingsGoal);
        navigate('/savings');
    };

    return (
        <div className="container">
            <PageTitle title="Create Savings Goal" />
            <h1>Create Savings Goal</h1>
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
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default Create;
