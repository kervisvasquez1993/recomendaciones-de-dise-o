import React from "react";
import { Link, NavLink } from "react-router-dom";

const SidebarLink = ({ label, to, icon = null }) => {
    return (
        <div className="nav-item {{ ($segment1 == 'dashboard') ? 'active' : '' }}">
            <NavLink to={to}>
                {icon}
                <i className="ik ik-bar-chart-2"></i>
                <span>{label}</span>
            </NavLink>
        </div>
    );
};

export default SidebarLink;
