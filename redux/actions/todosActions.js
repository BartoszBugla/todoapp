import { TODO_ADDED, TODOS_LOADED, TODO_DELETED, TODO_EDITED } from "../actions/types";
import axios from "axios";
export const loadTodos = (userID, token) => (dispatch) => {
    // Todos loading
    axios
        .post(`/todos`, { userID }, tokenConfig(token))
        .then((res) => {
            dispatch({ type: TODOS_LOADED, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
        });
};
export const addTodo = (body, token) => (dispatch) => {
    axios
        .post(`/todos/add`, body, tokenConfig(token))
        .then((res) => {
            dispatch({ type: TODO_ADDED, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
        });
};
export const deleteTodo = (id) => (dispatch) => {
    axios
        .delete(`/todos/${id}`)
        .then((res) => {
            dispatch({ type: TODO_DELETED, payload: id });
        })
        .catch((err) => {
            console.log(err);
        });
};
export const editTodo = (id, body) => (dispatch) => {
    axios
        .patch(`/todos/${id}`, body)
        .then((res) => {
            dispatch({ type: TODO_EDITED, payload: body, id });
        })
        .catch((err) => {});
};
export const checkTodo = (id, body) => (dispatch) => {
    axios
        .patch(`/todos/check/${id}`, body)
        .then((res) => {
            dispatch({ type: TODO_EDITED, payload: body, id });
        })
        .catch((err) => {});
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
