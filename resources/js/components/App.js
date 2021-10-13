import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getMyUser } from "../store/actions/authActions";
import Dashboard from "./Dashboard/Dashboard";
import Wizard from "./Main/Wizard/Wizard";
import HomePage from "./Main/HomePage";
import Header from "./Main/Layout/Header";
import Login from "./Main/Login";
import Logout from "./Main/Logout";
import { useUser } from "../utils";

export const API_URL = process.env.MIX_APP_API_URL || "/api";

const App = () => {
    const dispatch = useDispatch();
    const user = useUser();
    // @ts-ignore
    const isLoadingUser = useSelector((state) => state.auth.isLoadingUser);

    useEffect(() => {
        dispatch(getMyUser());
    }, []);

    if (isLoadingUser) {
        return null;
    }

    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/">
                <div className="home-page">
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/login" key="login">
                            <Login />
                        </Route>
                        <Route path="/logout">
                            <Logout />
                        </Route>
                        <Route path="/register" key="register">
                            <Login signUp={true} />
                        </Route>
                        <Route path="/proceso">
                            <Wizard />
                        </Route>
                        <Route path="*">Error</Route>
                    </Switch>
                </div>
            </Route>
        </Switch>
    );
};

export default App;
