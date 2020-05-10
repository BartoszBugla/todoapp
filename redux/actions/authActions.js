import axios from "axios";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "./types";
import { returnErrors } from "./errorActions";
// Check token & load user
export const loadUser = (token) => (dispatch) => {
    // User loading

    dispatch({ type: USER_LOADING });
    axios
        .post("/users", {}, tokenConfig(token))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
                token: token,
            });
        })
        .catch((err) => {});
};
export const register = (items) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // Request body
    //always check it out
    const body = JSON.stringify(items);

    axios
        .post("/users/register", body, config)
        .then((res) =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            })
        )
        .catch((err) => {
            dispatch({
                type: REGISTER_FAIL,
            });
            if (err) dispatch(returnErrors(err.response.data));
        });
};
// Login User
export const login = (payload) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // Request body
    const body = JSON.stringify(payload);

    axios
        .post("/users/login", body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: LOGIN_FAIL,
            });
            if (err) dispatch(returnErrors(err.response.data));
        });
};
// Logout User
export const logout = (type) => {
    console.log("action");
    return {
        type: LOGOUT_SUCCESS,
    };
};
// Setup config/headers and token
export const tokenConfig = (token) => {
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };

    // If token, add to headers
    if (token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
};
