import axios from "axios";
import { API_URL } from "../../components/App";

export function login(user, register = false) {
    return async (dispatch, getState) => {
        dispatch({ type: "LOGIN_REQUEST" });

        try {
            let response;

            if (register) {
                response = await axios.post(`${API_URL}/register`, user);
            } else {
                response = await axios.post(`${API_URL}/login`, user);
            }

            // Get the token and save it
            const token = response.data.access_token;
            localStorage.setItem("auth", token);

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data,
            });

            dispatch(getMyUser());
        } catch (e) {
            console.log(e.response);
            if (e.response.data.error) {
                dispatch({
                    type: "LOGIN_FAILURE",
                    errors: e.response.data.error,
                });
            } else {
                dispatch({
                    type: "LOGIN_FAILURE",
                    error: "Los datos son incorrectos",
                });
            }
        }
    };
}

export function getMyUser(user) {
    return async (dispatch, getState) => {
        dispatch({ type: "MY_USER_REQUEST" });

        try {
            const token = localStorage.getItem("auth");
            // @ts-ignore
            const response = await axios.get(`${API_URL}/me`, { token });

            dispatch({
                type: "MY_USER_SUCESS",
                payload: response.data,
            });
        } catch (e) {
            console.log(e);
            console.log(e.response);
            dispatch({
                type: "MY_USER_FAILURE",
            });
        }
    };
}

export function logout(user) {
    return async (dispatch, getState) => {
        localStorage.removeItem("auth");

        dispatch({
            type: "LOGOUT",
        });
    };
}

export function clearErrors(user) {
    return async (dispatch, getState) => {
        dispatch({
            type: "CLEAR_AUTH_ERRORS",
        });
    };
}
