import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//hooks functions
import { useForms } from "../../customHooks/formHook";
//items
import FormItem from "../dumb/formItem";
import SubmitButton from "../dumb/SubmitButton";
import Checkbox from "../dumb/Checkbox";
//actions
import { login } from "../../redux/actions/authActions";
//svg
import Social from "../svg/social.svg";
import Lock from "../svg/lock.svg";
import Error from "../dumb/Error";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
        margin-top: 20px;
    }
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const { inputs, handleInputChange } = useForms();
    const errMsg = useSelector((state) => state.errors.msg);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = inputs;
        const user = {
            email,
            password,
        };

        dispatch(login(user));
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <FormItem
                type="text"
                value={inputs.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Email"
                svg={<Social />}
            />
            <FormItem
                type="password"
                value={inputs.password}
                onChange={handleInputChange}
                name="password"
                placeholder="Hasło"
                svg={<Lock />}
            />
            <Checkbox onChange={handleInputChange} name="eula" checked={inputs.eula}>
                Zapamiętaj mnie
            </Checkbox>
            <Error message={errMsg} />
            <SubmitButton type="submit">Zaloguj się</SubmitButton>
        </Form>
    );
};

export default LoginForm;
