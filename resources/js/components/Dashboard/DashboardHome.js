import React from "react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    return (
        <>
            <div className="page-header">Header</div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card table-card proj-t-card">
                        <div className="card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla vitae suscipit leo.
                                Nullam interdum augue ac lacinia mattis. Nunc
                                vel bibendum nunc. Ut tempor rhoncus tortor ut
                                rutrum. Etiam pretium dui ac sapien dignissim,
                                sit amet pellentesque dui convallis. Maecenas
                                lorem nisl, aliquam id faucibus vitae, auctor
                                quis enim. Donec posuere dolor ac lectus finibus
                                tincidunt. Ut ac odio risus. Sed pharetra tortor
                                ut arcu lacinia mattis. Morbi et varius nibh, ut
                                aliquam odio.
                                <code>larave-permissions</code>
                                Read larave-permissions{" "}
                                <Link
                                    className="text-red"
                                    to="https://docs.spatie.be/laravel-permission/v3/introduction/"
                                >
                                    documentation
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
