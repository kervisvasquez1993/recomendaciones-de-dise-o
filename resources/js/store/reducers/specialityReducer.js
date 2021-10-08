const defaultState = {
    list: [],
    isLoadingList: false,
    listError: null,
};

const specialityReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    if (type === "GET_SPECIALITIES_REQUEST") {
        return { ...state, isLoadingList: true, listError: null };
    }

    if (type === "GET_SPECIALITIES_FAILURE") {
        return { ...state, isLoadingList: false, listError: payload };
    }

    if (type === "GET_SPECIALITIES_SUCCESS") {
        return {
            ...state,
            list: payload,
            isLoadingList: false,
            listError: null,
        };
    }

    return state;
};

export default specialityReducer;
