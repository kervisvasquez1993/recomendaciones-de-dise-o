import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home";

const App = () => {
    return (
        <Switch>
            <Route path="/dashboard" exact>
                <Dashboard />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="*">Error</Route>
        </Switch>
    );
};

export default App;
