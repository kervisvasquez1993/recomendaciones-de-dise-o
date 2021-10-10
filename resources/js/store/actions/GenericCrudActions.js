import axios from "axios";
import { API_URL } from "../../components/App";
import { genericFormSubmit } from "./genericFormActions";

class GenericCrudActions {
    constructor(name, apiPath) {
        this.name = name;
        this.apiPath = apiPath;
    }

    getList() {
        return async (dispatch, getState) => {
            dispatch({ type: `GET_${this.name}S_REQUEST` });

            try {
                let response = await axios.get(`${API_URL}/${this.apiPath}`);

                dispatch({
                    type: `GET_${this.name}S_SUCCESS`,
                    payload: response.data.data,
                });
            } catch (e) {
                dispatch({
                    type: `GET_${this.name}S_FAILURE`,
                });
            }
        };
    }

    get(id) {
        return async (dispatch, getState) => {
            dispatch({ type: `GET_${this.name}_REQUEST` });

            try {
                let response = await axios.get(
                    `${API_URL}/${this.apiPath}/${id}`
                );

                dispatch({
                    type: `GET_${this.name}_SUCCESS`,
                    payload: response.data.data,
                });
            } catch (e) {
                console.log(e);
                console.log(e.response);
                dispatch({
                    type: `GET_${this.name}_FAILURE`,
                    error: "No se puede encontrar esta especialidad",
                });
            }
        };
    }

    create(data, onSuccess) {
        return (dispatch) => {
            return genericFormSubmit(dispatch, () =>
                axios.post(`${API_URL}/${this.apiPath}`, data)
            ).then((response) => {
                onSuccess(response);
            });
        };
    }

    update(id, data, onSuccess) {
        return (dispatch) => {
            return genericFormSubmit(dispatch, () =>
                axios.post(`${API_URL}/${this.apiPath}/${id}`, data)
            ).then((response) => {
                onSuccess(response);
            });
        };
    }

    delete(id) {
        return async (dispatch, getState) => {
            dispatch({ type: `DELETE_${this.name}_REQUEST` });

            try {
                let response = await axios.delete(
                    `${API_URL}/${this.apiPath}/${id}`
                );

                dispatch({
                    type: `DELETE_${this.name}_SUCCESS`,
                    payload: response.data.data,
                });
            } catch (e) {
                console.log(e);
                console.log(e.response);
                dispatch({
                    type: `DELETE_${this.name}_FAILURE`,
                });
            }
        };
    }
}

export default GenericCrudActions;
