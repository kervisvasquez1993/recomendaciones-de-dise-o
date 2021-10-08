const defaultState = {
    list: [],
    isLoadingList: false,
    listError: null,

    item: null,
    isLoadingItem: false,
    itemError: null,
};

const specialityReducer = (state = defaultState, action) => {
    const { type, payload, error } = action;

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

    if (type === "GET_SPECIALITY_REQUEST") {
        return { ...state, isLoadingItem: true, itemError: null };
    }

    if (type === "GET_SPECIALITY_FAILURE") {
        console.log(payload);
        return { ...state, isLoadingItem: false, itemError: error };
    }

    if (type === "GET_SPECIALITY_SUCCESS") {
        return {
            ...state,
            item: payload,
            isLoadingItem: false,
            itemError: null,
        };
    }

    if (type === "DELETE_SPECIALITY_SUCCESS") {
        const newList = state.list.filter((item) => item.id != payload.id);

        return {
            ...state,
            list: newList,
        };
    }

    return state;
};

export default specialityReducer;
