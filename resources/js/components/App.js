import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getMyUser } from "../store/actions/authActions";
import { useUser } from "../utils";
import Dashboard from "./Dashboard/Dashboard";
import Wizard from "./Main/Wizard/Wizard";
import HomePage from "./Main/HomePage";
import Header from "./Main/Layout/Header";
import Login from "./Main/Login";
import Logout from "./Main/Logout";

export const API_URL = process.env.MIX_APP_API_URL || "/api";

const App = () => {
    const dispatch = useDispatch();
    const user = useUser();

    useEffect(() => {
        dispatch(getMyUser());
    }, []);

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
                        <Route path="/logout" key="login">
                            <Logout />
                        </Route>
                        <Route path="/register" key="register">
                            <Login signUp={true} />
                        </Route>
                        <Route path="/proceso">
                            <Wizard />
                        </Route>
                    </Switch>
                </div>
            </Route>

            <Route path="*">Error</Route>
        </Switch>
    );
};

export default App;
