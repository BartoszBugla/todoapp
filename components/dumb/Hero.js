import React from "react";
import styled from "styled-components";

const Photo = styled.div`
    height: 100vh;
    img {
        height: 100vh;
        width: 100vw;
        position: relative;
    }
    div {
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #792f2f;
        opacity: 0.6;
    }
`;
const Hero = () => {
    return (
        <Photo>
            <img src={require("../static/hero.jpg")} />
            <div></div>
        </Photo>
    );
};

export default Hero;
