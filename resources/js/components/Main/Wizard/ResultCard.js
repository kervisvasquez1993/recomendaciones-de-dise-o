import React from "react";
import { Link } from "react-router-dom";

const ResultCard = ({ data }) => {
    const { id } = data;

    return (
        <Link to={`/proceso/resultado/${id}`}>
            <div className="card">{id}</div>
        </Link>
    );
};

export default ResultCard;
