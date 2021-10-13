import React from "react";
import { useDispatch } from "react-redux";
import { setHideSidebar } from "../../../store/actions/layoutReducer";
// @ts-ignore
import avatar from "../../../../images/avatar.jpg";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className="header-top" header-theme="light">
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="top-menu d-flex align-items-center">
                        <button
                            type="button"
                            className="btn-icon mobile-nav-toggle d-lg-none"
                            onClick={() => dispatch(setHideSidebar(false))}
                        >
                            <span></span>
                        </button>
                    </div>
                    <div className="top-menu d-flex align-items-center">
                        <div className="dropdown">
                            <a
                                className="dropdown-toggle"
                                href="#"
                                id="userDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    className="avatar"
                                    src={avatar}
                                    alt="avatar image"
                                />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="userDropdown"
                            >
                                <Link className="dropdown-item" to="/logout">
                                    <i className="dropdown-icon">
                                        <BiLogOut />
                                    </i>
                                    Cerrar sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
