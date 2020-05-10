import React from "react";

import styled from "styled-components";
//import svgs
import FacebookLogo from "../svg/facebookLogo.svg";
import Google from "../svg/google.svg";

const Container = styled.div`
    background-color: ${(props) => props.color};
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    font-size: 1.2rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
    color: ${(props) => props.fontColor};
    margin-top: 10px;
    svg {
        width: 50px;
        height: 50px;
        fill: white;
        margin: 10px;
    }
    p {
        margin: 10px;
    }
    &:hover {
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.2), 0px 0px 14px rgba(0, 0, 0, 0.3);
    }
    &:active {
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5), 0px 0px 14px rgba(0, 0, 0, 0.3);
    }
`;
const Line = styled.div`
    height: 75%;
    background-color: black;
    width: 2px;
`;
//Google Widget
export const SignUpGoogle = () => {
    return (
        <Container color="#ffffff">
            <Google />

            <p>Zaloguj przez Google</p>
        </Container>
    );
};
//Facebook Widget
export const SignUpFacebook = () => {
    return (
        <Container color="#3b5998" fontColor="#ffffff">
            <FacebookLogo />

            <p>Zaloguj przez Facebook</p>
        </Container>
    );
};
