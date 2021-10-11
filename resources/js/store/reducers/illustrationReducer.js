import genericCrudReducer from "./genericCrudReducer";

const illustrationReducer = (state, action) => {
    return genericCrudReducer(state, action, "ILLUSTRATION");
};

export default illustrationReducer;
