import React from "react";

const PageHeader = ({
    title,
    icon,
    description = "",
    hideBreadcrumb = true,
}) => {
    return (
        <div className="page-header">
            <div className="row align-items-end">
                <div className="col-lg-8">
                    <div className="page-header-title">
                        <i className="bg-blue">{icon}</i>
                        <div className="d-inline">
                            <h5>{title}</h5>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
                {!hideBreadcrumb && (
                    <div className="col-lg-4">
                        <nav
                            className="breadcrumb-container"
                            aria-label="breadcrumb"
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="http://127.0.0.1:2323/dashboard">
                                        <i className="ik ik-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Widgets</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Widget Data
                                </li>
                            </ol>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
