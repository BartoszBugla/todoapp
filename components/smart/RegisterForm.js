import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions & functions
import { useForms } from "../../customHooks/formHook";
import { register } from "../../redux/actions/authActions";
//items
import { Form } from "./LoginForm";
import FormItem from "../dumb/formItem";
import SubmitButton from "../dumb/SubmitButton";
import Checkbox from "../dumb/Checkbox";
import Error from "../dumb/Error";
import { returnErrors, clearErrors } from "../../redux/actions/errorActions";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { inputs, handleInputChange } = useForms();
    const errMsg = useSelector((state) => state.errors.msg);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, lastName, email, password } = inputs;
        const user = {
            name,
            lastName,
            email,
            password,
        };
        if (inputs.repeatPassword != inputs.password) {
            return dispatch(
                returnErrors({
                    msg: "password does not match",
                    status: "400",
                    id: "repeatPassword",
                })
            );
        }
        dispatch(clearErrors());
        dispatch(register(user));
    };

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <FormItem
                type="text"
                value={inputs.name}
                onChange={handleInputChange}
                name="name"
                placeholder="Imie"
            />
            <FormItem
                type="text"
                value={inputs.lastName}
                onChange={handleInputChange}
                name="lastName"
                placeholder="Nazwisko"
            />
            <FormItem
                type="email"
                value={inputs.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Email"
            />
            <FormItem
                type="password"
                value={inputs.password}
                onChange={handleInputChange}
                name="password"
                placeholder="Hasło"
            />
            <FormItem
                type="password"
                value={inputs.repeatPassword}
                onChange={handleInputChange}
                name="repeatPassword"
                placeholder="Powtórz Hasło"
            />

            <Checkbox onChange={handleInputChange} name="eula" checked={inputs.eula}>
                Do you agree Eula?
            </Checkbox>
            <Error message={errMsg} />
            <SubmitButton type="submit">Zarejestuj się</SubmitButton>
        </Form>
    );
};

export default RegisterForm;
