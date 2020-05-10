import React from "react";
import styled from "styled-components";
import CrossMark from "../svg/close.svg";
import { useDispatch } from "react-redux";
import { clearErrors } from "../../redux/actions/errorActions";
export const ErrorContainer = styled.div`
    background-color: ${(props) => (props.hidden ? "" : "#fc8f8f")};
    padding: 5px;
    transition: 250ms ease-in;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 75%;
    min-height: 35px;

    p {
        line-height: 100%;
    }
    svg {
        height: 15px;
        width: 15px;
        fill: white;
        padding: 10px;
        path {
            fill: black;
        }
    }
`;
export const Xdiv = styled.div``;

const Error = ({ message }) => {
    const dispatch = useDispatch();
    const close = () => {
        dispatch(clearErrors());
    };
    if (message)
        return (
            <ErrorContainer>
                <CrossMark onClick={close} />

                <p> {message}</p>
            </ErrorContainer>
        );
    return <ErrorContainer hidden />;
};

export default Error;
