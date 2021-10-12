import genericCrudReducer from "./genericCrudReducer";

const specialityReducer = (state, action) => {
    return genericCrudReducer(state, action, "SPECIALITY");
};

export default specialityReducer;
