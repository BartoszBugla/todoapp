import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: solid 2px #ffffff;
    color: #bc5a5a;
    background-color: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-size: 1.6rem;
    &:focus {
        border: 2px solid #93acec;
    }
    &:active {
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
        color: #bc5a5a !important;
    }
    &:hover {
        background-color: #f2f2f2;
        color: #e59797;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 15px rgba(0, 0, 0, 0.3);
    }
`;
export default function SubmitButton({ children, ...props }) {
    return <Button {...props}>{children}</Button>;
}
