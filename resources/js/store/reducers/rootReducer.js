import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import layoutReducer from "./layoutReducer";
import screenReducer from "./screenReducer";

const rootReducer = combineReducers({
    screen: screenReducer,
    company: companyReducer,
    layout: layoutReducer,
});

export default rootReducer;
