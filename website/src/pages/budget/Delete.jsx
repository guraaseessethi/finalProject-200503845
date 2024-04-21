import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Delete = () => {
    axios.defaults.withCredentials = true;

    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        await axios.delete(`/api/budgets/${id}`);
        navigate("/budgets");
    };

    return (
        <div className="container">
            <h1>Delete Budget</h1>
            <hr className="my-3" />
            <button onClick={handleDelete} className="btn btn-danger">
                Delete
            </button>
        </div>
    );
};

export default Delete;
