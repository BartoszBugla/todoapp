import React from "react";
import styled from "styled-components";

const Container = styled.li`
    width: 100%;
    background: linear-gradient(101.38deg, #b85454 0%, #c55645 100.5%);
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    text-align: center;
    border-top: black solid 2px;
    * {
        padding: 10px;
    }
    svg {
        width: 35px;
        height: 35px;
        fill: white;
        margin-right: 15px;
    }
    &:hover {
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    &:active {
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);
    }
`;
const NavItem = ({ children, svg }) => {
    return (
        <Container>
            {svg}
            <p>{children}</p>
        </Container>
    );
};

export default NavItem;
