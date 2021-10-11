import genericCrudReducer from "./genericCrudReducer";

const logoTypeReducer = (state, action) => {
    return genericCrudReducer(state, action, "LOGO_TYPE");
};

export default logoTypeReducer;
