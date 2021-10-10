const defaultState = {
    list: [],
    isLoadingList: false,
    listError: null,

    item: null,
    isLoadingItem: false,
    itemError: null,
};

const genericCrudReducer = (state = defaultState, action, name) => {
    const { type, payload, error } = action;

    if (type === `GET_${name}S_REQUEST`) {
        return { ...state, isLoadingList: true, listError: null };
    }

    if (type === `GET_${name}S_FAILURE`) {
        return { ...state, isLoadingList: false, listError: error };
    }

    if (type === `GET_${name}S_SUCCESS`) {
        return {
            ...state,
            list: payload,
            isLoadingList: false,
            listError: null,
        };
    }

    if (type === `GET_${name}_REQUEST`) {
        return { ...state, isLoadingItem: true, itemError: null };
    }

    if (type === `GET_${name}_FAILURE`) {
        return { ...state, isLoadingItem: false, itemError: error };
    }

    if (type === `GET_${name}_SUCCESS`) {
        return {
            ...state,
            item: payload,
            isLoadingItem: false,
            itemError: null,
        };
    }

    if (type === `DELETE_${name}_SUCCESS`) {
        const newList = state.list.filter((item) => item.id != payload.id);

        return {
            ...state,
            list: newList,
        };
    }

    return state;
};

export default genericCrudReducer;
