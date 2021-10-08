import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

function Index() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
