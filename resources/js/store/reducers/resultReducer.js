import genericCrudReducer from "./genericCrudReducer";

const resultReducer = (state, action) => {
    return genericCrudReducer(state, action, "RESULT");
};

export default resultReducer;
