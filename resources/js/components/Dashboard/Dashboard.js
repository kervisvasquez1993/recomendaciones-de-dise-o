import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lg } from "../../boostrapVariables";
import { setHideSidebar } from "../../store/actions/layoutReducer";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";

const Dashboard = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const hideSidebar = useSelector((state) => state.layout.hideSidebar);

    const handleCloseSidebar = () => {
        if (!hideSidebar && window.innerWidth < lg) {
            dispatch(setHideSidebar(true));
        }
    };

    return (
        <div className="wrapper">
            <Header />
            <div className="page-wrap" onClick={handleCloseSidebar}>
                <Sidebar />

                <div className="main-content">
                    <div className="container-fluid">
                        <div className="page-header">Header</div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card table-card proj-t-card">
                                    <div className="card-body">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nulla
                                            vitae suscipit leo. Nullam interdum
                                            augue ac lacinia mattis. Nunc vel
                                            bibendum nunc. Ut tempor rhoncus
                                            tortor ut rutrum. Etiam pretium dui
                                            ac sapien dignissim, sit amet
                                            pellentesque dui convallis. Maecenas
                                            lorem nisl, aliquam id faucibus
                                            vitae, auctor quis enim. Donec
                                            posuere dolor ac lectus finibus
                                            tincidunt. Ut ac odio risus. Sed
                                            pharetra tortor ut arcu lacinia
                                            mattis. Morbi et varius nibh, ut
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
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
