import axios from "axios";
export const getTodos = (userID, token) => {
    let res;
    axios
        .get(`http://localhost:5000/todos/${userID}`, {}, tokenConfig(token))
        .then((r) => {
            res = r;
        })
        .catch((e) => {
            res = e;
        });

    return res;
};
export const addTodo = (body, token) => {
    let res;
    console.log(body);
    axios
        .post("http://localhost:5000/todos", body, tokenConfig(token))
        .then((r) => {
            res = r;
        })
        .catch((e) => {
            res = e;
            console.log(e);
        });

    return res;
};
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
