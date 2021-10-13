import genericCrudReducer from "./genericCrudReducer";

const savedResultReducer = (state, action) => {
    return genericCrudReducer(state, action, "SAVED_RESULT");
};

export default savedResultReducer;
