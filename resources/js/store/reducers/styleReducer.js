const defaultState = {
    list: [],
    isLoadingList: false,
    listError: null,

    item: null,
    isLoadingItem: false,
    itemError: null,
};

const styleReducer = (state = defaultState, action) => {
    const { type, payload, error } = action;

    if (type === "GET_STYLES_REQUEST") {
        return { ...state, isLoadingList: true, listError: null };
    }

    if (type === "GET_STYLES_FAILURE") {
        return { ...state, isLoadingList: false, listError: payload };
    }

    if (type === "GET_STYLES_SUCCESS") {
        return {
            ...state,
            list: payload,
            isLoadingList: false,
            listError: null,
        };
    }

    if (type === "GET_STYLE_REQUEST") {
        return { ...state, isLoadingItem: true, itemError: null };
    }

    if (type === "GET_STYLE_FAILURE") {
        return { ...state, isLoadingItem: false, itemError: error };
    }

    if (type === "GET_STYLE_SUCCESS") {
        return {
            ...state,
            item: payload,
            isLoadingItem: false,
            itemError: null,
        };
    }

    if (type === "DELETE_STYLE_SUCCESS") {
        const newList = state.list.filter((item) => item.id != payload.id);

        return {
            ...state,
            list: newList,
        };
    }

    return state;
};

export default styleReducer;
