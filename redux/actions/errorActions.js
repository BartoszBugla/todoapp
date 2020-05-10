import { GET_ERRORS, CLOSE_ERRORS } from "./types";

// RETURN ERRORS
export const returnErrors = (msg) => {
    return {
        type: GET_ERRORS,
        payload: msg,
    };
};

// CLEAR ERRORS
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLOSE_ERRORS });
};
