import React from "react";
import { useDispatch } from "react-redux";
import { setHideSidebar } from "../../../store/actions/layoutReducer";

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
                                    src="{{ asset('img/user.jpg')}}"
                                    alt=""
                                />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="userDropdown"
                            >
                                <a
                                    className="dropdown-item"
                                    href="{{ url('logout') }}"
                                >
                                    <i className="ik ik-power dropdown-icon"></i>
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
