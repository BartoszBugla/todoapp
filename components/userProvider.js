import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../redux/actions/authActions";
import { loadTodos } from "../redux/actions/todosActions";
import { clearErrors } from "../redux/actions/errorActions";

export default function UserProvider({ token, children }) {
    const dispatch = useDispatch();
    const userID = useSelector((state) => state.Auth.user._id);

    dispatch(clearErrors());
    useEffect(() => {
        if (userID) dispatch(loadTodos(userID, token));
        if (token) dispatch(loadUser(token));
    }, [userID, token]);

    return <div>{children}</div>;
}
