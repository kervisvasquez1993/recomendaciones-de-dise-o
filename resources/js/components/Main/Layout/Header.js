import React from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../../../../images/logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/">
                        <img className="logo-img" src={logo} />
                    </Link>
                    <TiThMenu className="p-2 icon-xl text-primary" />
                </div>
            </div>
        </header>
    );
};

export default Header;
