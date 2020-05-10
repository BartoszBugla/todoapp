import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import NavItem from "../dumb/NavItem";
import SubmitButton from "../dumb/SubmitButton";

import Calendar from "../svg/calendar.svg";
import Social from "../svg/social.svg";
import Settings from "../svg/settings.svg";

import { logout } from "../../redux/actions/authActions";
const Container = styled.nav`
    background-color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100vh;
`;
const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: grey;
`;
const NameItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0px;
    * {
        margin: 10px;
    }
`;

const Navbar = () => {
    const { name, lastName } = useSelector((state) => state.Auth.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log("button works");
        dispatch(logout());
    };
    return (
        <Container>
            <div>
                <NameItem>
                    <Circle></Circle>
                    <p>
                        {name} {lastName}
                    </p>
                </NameItem>
            </div>

            <ul>
                <NavItem svg={<Calendar />}> Kalendarz</NavItem>
                <NavItem svg={<Social />}> Profil Użytkownika</NavItem>
                <NavItem svg={<Settings />}> Ustawienia</NavItem>
            </ul>
            <SubmitButton onClick={handleLogout}>Logout</SubmitButton>
        </Container>
    );
};

export default Navbar;
