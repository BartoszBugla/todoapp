import React, { useState } from "react";
export const useForms = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleInputChange = (event) => {
        event.persist();

        if (event.target.type === "checkbox") {
            setInputs((inputs) => ({
                ...inputs,
                [event.target.name]: event.target.checked,
            }));
        } else {
            setInputs((inputs) => ({
                ...inputs,
                [event.target.name]: event.target.value,
            }));
        }
    };

    return {
        handleInputChange,
        inputs,
        setInputs,
    };
};
