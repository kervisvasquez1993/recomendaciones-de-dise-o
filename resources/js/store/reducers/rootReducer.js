import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import fontReducer from "./fontReducer";
import genericFormReducer from "./genericFormReducer";
import layoutReducer from "./layoutReducer";
import screenReducer from "./screenReducer";
import specialityReducer from "./specialityReducer";
import styleReducer from "./styleReducer";

const rootReducer = combineReducers({
    screen: screenReducer,
    company: companyReducer,
    layout: layoutReducer,
    speciality: specialityReducer,
    genericForm: genericFormReducer,
    style: styleReducer,
    font: fontReducer,
});

export default rootReducer;
