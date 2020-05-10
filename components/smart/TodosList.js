import React from "react";
import styled from "styled-components";
import DayPage from "./DayPage";
import Todo from "../dumb/Todo";
import { useSelector } from "react-redux";
const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const WeekDays = ["Poniedziałek", "wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

const Styles = styled.ul`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 100vh;
    overflow-y: scroll;
    width: 100%;
`;

const TodosList = () => {
    let todos = useSelector((state) => state.todos);

    //! amount of cards
    let limit = 10;
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const currentYear = today.getFullYear();
    const currentWeekDay = today.getDay();
    const currentDate = `${currentDay}.${currentMonth}.${currentYear}`;
    //intercalary year / leap year
    if (currentYear % 4 == 0) dayOfMonth[1] = 29;
    //declraing GLOBAL loop variables
    const Items = [];
    let month = currentMonth + 1;
    //! it is must have to work loop properly
    let next = 100;
    //loop
    for (let i = 0; i < limit; i++) {
        //declaring in  LOCAL loop variables
        let day = currentDay + i;
        let monthDays = dayOfMonth[month];
        let weekDay = WeekDays[(currentWeekDay + i - 1) % 7];
        //if statements
        if (monthDays < day) {
            next++;
            day = next;
        }
        if (monthDays < next && monthDays < day) {
            month++;
            next = 1;
        }
        const passedTodos = todos ? todos.filter((i) => i.day === day && i.month == month) : [];

        Items.push(
            <DayPage
                currentDate={{ currentDay, currentMonth, currentYear }}
                key={i}
                weekDay={weekDay}
                day={day}
                month={month}
            >
                {passedTodos.map((i) => (
                    <Todo todo={i} />
                ))}
            </DayPage>
        );
    }
    return <Styles>{Items}</Styles>;
};

export default TodosList;
