import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../actions/types";
import Cookies from "js-cookie";
import Router from "next/router";
const initialState = {
    token: null,
    user: {},
    isLoading: false,
    isAuthenticated: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED:
            return {
                ...state,
                token: action.token,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            Router.push("/dashboard");
            Cookies.set("token", action.payload.token);
            return {
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                isLoading: false,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            Cookies.remove("token");
            return {
                ...state,
                user: {},
                isAuthenticated: false,
                isLoading: false,
            };

        default:
            return state;
    }
}
