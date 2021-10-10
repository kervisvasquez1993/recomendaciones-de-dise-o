import genericCrudReducer from "./genericCrudReducer";

// const defaultState = {
//     list: [],
//     isLoadingList: false,
//     listError: null,

//     item: null,
//     isLoadingItem: false,
//     itemError: null,
// };

const fontReducer = (state, action) => {
    return genericCrudReducer(state, action, "FONT")
    // const { type, payload, error } = action;

    // if (type === "GET_FONTS_REQUEST") {
    //     return { ...state, isLoadingList: true, listError: null };
    // }

    // if (type === "GET_FONTS_FAILURE") {
    //     return { ...state, isLoadingList: false, listError: payload };
    // }

    // if (type === "GET_FONTS_SUCCESS") {
    //     return {
    //         ...state,
    //         list: payload,
    //         isLoadingList: false,
    //         listError: null,
    //     };
    // }

    // if (type === "GET_FONT_REQUEST") {
    //     return { ...state, isLoadingItem: true, itemError: null };
    // }

    // if (type === "GET_FONT_FAILURE") {
    //     return { ...state, isLoadingItem: false, itemError: error };
    // }

    // if (type === "GET_FONT_SUCCESS") {
    //     return {
    //         ...state,
    //         item: payload,
    //         isLoadingItem: false,
    //         itemError: null,
    //     };
    // }

    // if (type === "DELETE_FONT_SUCCESS") {
    //     const newList = state.list.filter((item) => item.id != payload.id);

    //     return {
    //         ...state,
    //         list: newList,
    //     };
    // }

    // return state;
};

export default fontReducer;
