import React, { useState, useEffect } from "react";
import styled from "styled-components";

const size = "20px";
const fontSize = "16px";
const ContainerCheckbox = styled.div`
    display: flex;
    flex-direction: row;
    p {
        margin-left: 10px;
        color: black;
        font-size: ${fontSize};
    }
`;
const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    height: ${size};
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: ${size};
`;
const StyledCheckbox = styled.div`
    display: inline-block;
    width: ${size};
    height: ${size};
    background: ${(props) => (props.checked ? "salmon" : "none")};
    border: ${(props) => (props.checked ? "" : "black solid 1px")};
    border-radius: 3px;
    transition: all 150ms;
    ${Icon} {
        visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    }
    ${HiddenCheckbox}:focus,${HiddenCheckbox}:hover + & {
        box-shadow: 0 0 0 3px pink;
    }
`;

const Checkbox = ({ children, checked, ...props }) => {
    if (!checked) {
        checked = false;
    }
    return (
        <ContainerCheckbox>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            <p>{children}</p>
        </ContainerCheckbox>
    );
};

export default Checkbox;
