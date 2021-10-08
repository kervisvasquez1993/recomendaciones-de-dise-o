import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import layoutReducer from "./layoutReducer";
import screenReducer from "./screenReducer";
import specialityReducer from "./specialityReducer";

const rootReducer = combineReducers({
    screen: screenReducer,
    company: companyReducer,
    layout: layoutReducer,
    speciality: specialityReducer,
});

export default rootReducer;
