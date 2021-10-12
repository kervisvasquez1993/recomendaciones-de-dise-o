import axios from "axios";
import { API_URL } from "../../components/App";
import { genericFormSubmit } from "./genericFormActions";

export function getStyles({ speciality = null } = {}) {
    return async (dispatch, getState) => {
        dispatch({ type: "GET_STYLES_REQUEST" });

        try {
            let response = await axios.get(
                `${API_URL}/estilos?${
                    speciality ? "especialidad=" + speciality : ""
                }`
            );

            dispatch({
                type: "GET_STYLES_SUCCESS",
                payload: response.data.data,
            });
        } catch (e) {
            dispatch({
                type: "GET_STYLES_FAILURE",
            });
        }
    };
}

export function getStyle(id) {
    return async (dispatch, getState) => {
        dispatch({ type: "GET_STYLE_REQUEST" });

        try {
            let response = await axios.get(`${API_URL}/estilos/${id}`);

            dispatch({
                type: "GET_STYLE_SUCCESS",
                payload: response.data.data,
            });
        } catch (e) {
            console.log(e);
            console.log(e.response);
            dispatch({
                type: "GET_STYLE_FAILURE",
                error: "No se puede encontrar esta especialidad",
            });
        }
    };
}

export function createStyle(data, onSuccess) {
    return (dispatch) => {
        return genericFormSubmit(dispatch, () =>
            axios.post(`${API_URL}/estilos`, data)
        ).then((response) => {
            onSuccess();
        });
    };
}

export function updateStyle(data, onSuccess) {
    return (dispatch) => {
        return genericFormSubmit(dispatch, () =>
            axios.put(`${API_URL}/estilos/${data.id}`, data)
        ).then((response) => {
            onSuccess();
        });
    };
}

export function deleteStyle(data) {
    return async (dispatch, getState) => {
        dispatch({ type: "DELETE_STYLE_REQUEST" });

        try {
            let response = await axios.delete(`${API_URL}/estilos/${data.id}`);

            dispatch({
                type: "DELETE_STYLE_SUCCESS",
                payload: response.data.data,
            });
        } catch (e) {
            console.log(e);
            console.log(e.response);
            dispatch({
                type: "DELETE_STYLE_FAILURE",
            });
        }
    };
}
