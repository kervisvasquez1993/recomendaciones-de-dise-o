import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { lg } from "../../boostrapVariables";
import { setHideSidebar } from "../../store/actions/layoutReducer";
import DashboardHome from "./DashboardHome";
import ErrorPage from "./ErrorPage";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import SpecialityList from "./Specialities/SpecialityList";

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
                        <Switch>
                            <Route path="/dashboard" exact>
                                <DashboardHome />
                            </Route>
                            <Route path="/dashboard/especialidades" exact>
                                <SpecialityList />
                            </Route>
                            <Route path="*">
                                <ErrorPage />
                            </Route>
                        </Switch>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
