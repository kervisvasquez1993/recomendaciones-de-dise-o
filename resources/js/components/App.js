import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getMyUser } from "../store/actions/authActions";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home";
import HomePage from "./Main/HomePage";
import Login from "./Main/Login";

export const API_URL = process.env.MIX_APP_API_URL || "/api";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyUser());
    }, []);

    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/login" key="login">
                <Login />
            </Route>
            <Route path="/register" key="register">
                <Login signUp={true} />
            </Route>
            <Route path="/old" exact>
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="*">Error</Route>
        </Switch>
    );
};

export default App;
