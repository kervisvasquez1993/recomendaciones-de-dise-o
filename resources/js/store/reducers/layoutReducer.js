const defaultState = {
    hideSidebar: true
};

const layoutReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    if (type === "HIDE_SIDEBAR") {
        return { ...state, hideSidebar: payload };
    }

    return state;
};

export default layoutReducer;
