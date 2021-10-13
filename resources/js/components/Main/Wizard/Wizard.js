import React from "react";
import { Route, Switch } from "react-router";
import ImageScreen from "./ImageScreen";
import NameScreen from "./NameScreen";
import ResultListScreen from "./ResultListScreen";
import ResultScreen from "./ResultScreen";
import SavedResultScreen from "./SavedResultScreen";
import StyleScreen from "./StyleScreen";
import TypeScreen from "./TypeScreen";

function Wizard() {
    return (
        <div className="wizard">
            <div className="screens">
                <div className="overlay screen-background"></div>
                <Switch>
                    <Route path="/proceso/nombre">
                        <NameScreen />
                    </Route>
                    <Route path="/proceso/imagen">
                        <ImageScreen />
                    </Route>
                    <Route path="/proceso/sector">
                        <TypeScreen />
                    </Route>
                    <Route path="/proceso/estilo">
                        <StyleScreen />
                    </Route>
                    <Route path="/proceso/resultados">
                        <ResultListScreen />
                    </Route>
                    <Route path="/proceso/resultado/:id">
                        <ResultScreen />
                    </Route>
                    <Route path="/proceso/resultado_guardado/:id">
                        <SavedResultScreen />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Wizard;
