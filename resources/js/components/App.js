import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home";
import HomePage from "./Main/HomePage";
import Login from "./Main/Login";

export const API_URL = process.env.MIX_APP_API_URL || "/api";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
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
