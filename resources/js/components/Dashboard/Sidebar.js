import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <a className="header-brand" href="{{route('dashboard')}}">
                    <div className="logo-img">
                        <img
                            height="30"
                            src="{{ asset('img/logo_white.png')}}"
                            className="header-brand-img"
                            title="RADMIN"
                        />
                    </div>
                </a>
            </div>

            <div className="sidebar-content">
                <nav id="main-menu-navigation" className="navigation-main">
                    <div className="nav-lavel">Contenido</div>
                    <div className="nav-item">
                        <Link to="/text">
                            <i className="ik ik-dollar-sign"></i>
                            <span>Hola</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Dashboard;
