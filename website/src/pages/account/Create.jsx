import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const Create = () => {
    const [accountType, setAccountType] = useState('');
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const account = { accountType, balance };
        await axios.post('/api/accounts', account);
        navigate('/accounts');
    };

    return (
        <div className="container">
            <PageTitle title="Create Account" />
            <h1>Create Account</h1>
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
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default Create;
