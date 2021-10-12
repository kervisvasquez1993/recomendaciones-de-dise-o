import { combineReducers } from "redux";
import authReducer from "./authReducer";
import companyReducer from "./companyReducer";
import fontReducer from "./fontReducer";
import genericFormReducer from "./genericFormReducer";
import illustrationReducer from "./illustrationReducer";
import layoutReducer from "./layoutReducer";
import logoTypeReducer from "./logoTypeReducer";
import resultReducer from "./resultReducer";
import screenReducer from "./screenReducer";
import specialityReducer from "./specialityReducer";
import styleReducer from "./styleReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    screen: screenReducer,
    company: companyReducer,
    layout: layoutReducer,
    speciality: specialityReducer,
    genericForm: genericFormReducer,
    style: styleReducer,
    font: fontReducer,
    illustration: illustrationReducer,
    logoType: logoTypeReducer,
    result: resultReducer,
});

export default rootReducer;
