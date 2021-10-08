import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import genericFormReducer from "./genericFormReducer";
import layoutReducer from "./layoutReducer";
import screenReducer from "./screenReducer";
import specialityReducer from "./specialityReducer";

const rootReducer = combineReducers({
    screen: screenReducer,
    company: companyReducer,
    layout: layoutReducer,
    speciality: specialityReducer,
    genericForm: genericFormReducer,
});

export default rootReducer;
