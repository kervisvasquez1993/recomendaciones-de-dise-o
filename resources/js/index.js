import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import Home from "./components/Home";

export const store = createStore(rootReducer);

function Index() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Home />
            </Provider>
        </React.StrictMode>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
