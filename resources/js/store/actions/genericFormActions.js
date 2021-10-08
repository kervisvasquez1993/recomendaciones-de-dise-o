export async function genericFormSubmit(dispatch, request, successCallback) {
    return new Promise((resolve, reject) => {
        dispatch({ type: "FORM_SUBMIT_REQUEST" });

        request()
            .then((e) => {
                dispatch({
                    type: "FORM_SUBMIT_SUCCESS",
                    payload: e.data.data,
                });

                resolve(e.data.data);
            })
            .catch((e) => {
                dispatch({
                    type: "FORM_SUBMIT_FAILURE",
                    errors: e.response.data.error,
                    // error: e.response.data.error,
                });

                reject(e.response);
            });
    });
}

export function showGeneralError(message) {
    return {
        type: "FORM_SHOW_GENERAL_ERROR",
        payload: message,
    };
}
