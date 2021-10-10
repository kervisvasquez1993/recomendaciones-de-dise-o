import GenericCrudActions from "./GenericCrudActions";

const FontActions = new GenericCrudActions("FONT", "fuentes");
export default FontActions;

// export function getFonts() {
//     return async (dispatch, getState) => {
//         dispatch({ type: "GET_FONTS_REQUEST" });

//         try {
//             let response = await axios.get(`${API_URL}/fuentes`);

//             dispatch({
//                 type: "GET_FONTS_SUCCESS",
//                 payload: response.data.data,
//             });
//         } catch (e) {
//             dispatch({
//                 type: "GET_FONTS_FAILURE",
//             });
//         }
//     };
// }

// export function getFont(id) {
//     return async (dispatch, getState) => {
//         dispatch({ type: "GET_FONT_REQUEST" });

//         try {
//             let response = await axios.get(`${API_URL}/fuentes/${id}`);

//             dispatch({
//                 type: "GET_FONT_SUCCESS",
//                 payload: response.data.data,
//             });
//         } catch (e) {
//             console.log(e);
//             console.log(e.response);
//             dispatch({
//                 type: "GET_FONT_FAILURE",
//                 error: "No se puede encontrar esta especialidad",
//             });
//         }
//     };
// }

// export function createFont(data, onSuccess) {
//     return (dispatch) => {
//         return genericFormSubmit(dispatch, () =>
//             axios.post(`${API_URL}/fuentes`, data)
//         ).then((response) => {
//             onSuccess();
//         });
//     };
// }

// export function updateFont(data, onSuccess) {
//     return (dispatch) => {
//         return genericFormSubmit(dispatch, () =>
//             axios.post(`${API_URL}/fuentes/${data.get("id")}`, data)
//         ).then((response) => {
//             onSuccess();
//         });
//     };
// }

// export function deleteFont(data) {
//     return async (dispatch, getState) => {
//         dispatch({ type: "DELETE_FONT_REQUEST" });

//         try {
//             let response = await axios.delete(`${API_URL}/fuentes/${data.id}`);

//             dispatch({
//                 type: "DELETE_FONT_SUCCESS",
//                 payload: response.data.data,
//             });
//         } catch (e) {
//             console.log(e);
//             console.log(e.response);
//             dispatch({
//                 type: "DELETE_FONT_FAILURE",
//             });
//         }
//     };
// }
