import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="w-100 clearfix">
                <span className="text-center text-sm-left d-md-inline-block">
                    Copyright © 2021
                </span>
                {/* <span className="float-none float-sm-right mt-1 mt-sm-0 text-center">
                    Desarrollado por{" "}
                    <a href="#" className="text-dark" target="_blank">
                        Kervis Vasquez
                    </a>
                </span> */}
            </div>
        </footer>
    );
};

export default Footer;
