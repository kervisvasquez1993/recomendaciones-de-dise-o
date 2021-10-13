import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

const SidebarLink = ({ label, to, icon = null }) => {
    const location = useLocation();

    const isActive = matchPath(location.pathname, {
        path: to,
        exact: true,
        strict: false,
    });

    return (
        <div className={`nav-item ${isActive ? "active" : ""}`}>
            <Link to={to}>
                {icon}
                <i className="ik ik-bar-chart-2"></i>
                <span>{label}</span>
            </Link>
        </div>
    );
};

export default SidebarLink;
