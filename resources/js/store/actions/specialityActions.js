import axios from "axios";
import { API_URL } from "../../components/App";
import { genericFormSubmit } from "./genericFormActions";

export function getSpecialities(name) {
    return async (dispatch, getState) => {
        dispatch({ type: "GET_SPECIALITIES_REQUEST" });

        try {
            let response = await axios.get(`${API_URL}/especialidades`);

            dispatch({
                type: "GET_SPECIALITIES_SUCCESS",
                payload: response.data.data,
            });
        } catch (e) {
            dispatch({
                type: "GET_SPECIALITIES_FAILURE",
            });
        }
    };
}

export function getSpeciality(id) {
    return async (dispatch, getState) => {
        dispatch({ type: "GET_SPECIALITY_REQUEST" });

        try {
            let response = await axios.get(`${API_URL}/especialidades/${id}`);

            dispatch({
                type: "GET_SPECIALITY_SUCCESS",
                payload: response.data.data,
            });
        } catch (e) {
            // console.log(e);
            // console.log(e.response);
            dispatch({
                type: "GET_SPECIALITY_FAILURE",
                error: "No se puede encontrar esta especialidad",
            });
        }
    };
}

export function createSpeciality(data, onSuccess) {
    return (dispatch) => {
        return genericFormSubmit(dispatch, () =>
            axios.post(`${API_URL}/especialidades`, data)
        ).then((response) => {
            onSuccess();
        });
    };
}

export function updateSpeciality(data, onSuccess) {
    return (dispatch) => {
        return genericFormSubmit(dispatch, () =>
            axios.put(`${API_URL}/especialidades/${data.id}`, data)
        ).then((response) => {
            onSuccess();
        });
    };
}

export function deleteSpeciality(data, onSuccess) {
    return async (dispatch, getState) => {
        dispatch({ type: "DELETE_SPECIALITY_REQUEST" });

        try {
            let response = await axios.delete(
                `${API_URL}/especialidades/${data.id}`
            );

            dispatch({
                type: "DELETE_SPECIALITY_SUCCESS",
                payload: response.data.data,
            });

            onSuccess();
        } catch (e) {
            dispatch({
                type: "DELETE_SPECIALITY_FAILURE",
            });
        }
    };
}
