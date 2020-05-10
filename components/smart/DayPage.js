import React from "react";
import styled from "styled-components";
import { ClearTodo } from "../dumb/Todo";
import Plus from "../svg/plus.svg";
import Edit from "../svg/edit.svg";
import convertDate from "../../customHooks/convertDate";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../redux/actions/types";
const Container = styled.div`
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    margin: 20px 100px;
    width: 40vw;
`;
const Day = styled.p`
    font-weight: 700;
`;

const Date = styled.p`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const Header = styled.div`
    display: grid;
    grid-template-columns: 150px auto 50px;
    justify-items: center;
    padding: 10px;
    width: 90%;
    margin: 0 auto;
    position: relative;
    font-size: 20px;
    svg {
        width: 25px;
        height: 25px;

        &:hover {
            filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
    }
`;

const DayPage = ({ weekDay, day, month, children }) => {
    const date = convertDate(day, month, ".");
    const dispatch = useDispatch();
    return (
        <Container>
            <Header>
                <Day>{weekDay}</Day>
                <Date>{date}</Date>
                <div></div>

                <Plus onClick={() => dispatch({ type: OPEN_MODAL, payload: { day, month } })} />
            </Header>
            {children}

            <ClearTodo />
        </Container>
    );
};

export default DayPage;
