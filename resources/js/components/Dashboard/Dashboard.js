import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="wrapper">
            <div className="page-wrap">
                <Sidebar />

                <div className="main-content">
                    Hola!!!
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
