const defaultState = {
    user: null,
    isLoggin: false,
    errors: {},
    error: "",
    isLoadingUser: true,
};

const authReducer = (state = defaultState, action) => {
    const { type, payload, error, errors } = action;

    switch (type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                isLoggin: true,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggin: false,
                errors: {},
                error: "",
            };
        case "LOGIN_FAILURE":
            console.log("errors", errors);
            console.log("error", error);

            return {
                ...state,
                isLoggin: false,
                errors: action.errors,
                error: action.error,
            };
        case "MY_USER_REQUEST":
            return {
                ...state,
                isLoadingUser: true,
            };
        case "MY_USER_SUCESS":
            return {
                ...state,
                user: payload,
                isLoadingUser: false,
            };
        case "MY_USER_FAILURE":
            return {
                ...state,
                isLoadingUser: false,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        case "CLEAR_AUTH_ERRORS":
            return {
                ...state,
                errors: {},
                error: "",
            };
        default:
            return state;
    }
};

export default authReducer;
