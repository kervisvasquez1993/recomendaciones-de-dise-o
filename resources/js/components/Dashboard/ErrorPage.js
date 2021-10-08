import React from "react";

const ErrorPage = ({ message }) => {
    return (
        <div className="row">
            <div className="col">
                <h2>Hubo un error</h2>
                <p className="ml-4 text-lg">{message}</p>
            </div>
        </div>
    );
};

export default ErrorPage;
