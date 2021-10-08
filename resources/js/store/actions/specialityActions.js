import axios from "axios";
import { apiURL } from "../../components/App";

export function getSpecialities(name) {
    return async (dispatch, getState) => {
        dispatch({ type: "GET_SPECIALITIES_REQUEST" });

        try {
            let response = await axios.get(`${apiURL}/especialidades`);

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
