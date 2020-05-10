import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//svg
import Delete from "../svg/delete.svg";
import Edit from "../svg/edit.svg";
import Circle from "../svg/circle.svg";
import Close from "../svg/close.svg";
import Tick from "../svg/tick.svg";
//actions
import convertDate from "../../customHooks/convertDate";
import { editTodo, checkTodo, deleteTodo } from "../../redux/actions/todosActions";
//elements
import Select from "../dumb/Select";
import FormItem from "./formItem";
import { useForms } from "../../customHooks/formHook";
const Container = styled.div`
    display: grid;
    grid-template-columns: 50px 100px auto 75px;
    justify-items: center;
    align-items: center;
    padding: 10px;
    border-top: 10px;
    border-top: 2px solid black;
    width: 90%;
    margin: 0 auto;
    min-height: 2.5vh;
    font-size: 1.1rem;
    font-family: "Jost";

    svg {
        height: 25px;
        width: 25px;
        margin: 0 5px;
        &:hover {
            filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));
            transform: scale(1.1);
        }
    }
    .edit:hover {
        fill: #03c04a;
    }
    .delete:hover {
        fill: #c2261f;
    }
    .circle {
        circle {
            fill: ${(props) => (props.done ? "#03c04a" : "none")};
        }
    }
    .circle:hover {
        transform: scale(1);
        circle {
            fill: #03c04a;
        }
    }
`;
const ModalItem = styled(FormItem)`
    color: black;
    &::placeholder {
        color: #888888 !important;
    }
    transform: scale(0.8);
`;
const Todo = ({ todo = {} }) => {
    const { title, hour, minute, _id, done } = todo;
    const convertedHour = convertDate(hour, minute, ":");
    const { setInputs, inputs, handleInputChange } = useForms();
    const containerRef = useRef(null);
    const dispatch = useDispatch();
    const editPayload = inputs;
    console.log(done);
    //switch to edt
    const switchEdit = () => {
        setIsEdit((isEdit) => !isEdit);
    };
    //delete action
    const deleteThis = (e) => {
        e.preventDefault();
        dispatch(deleteTodo(_id));
    };
    //edit action
    const editThis = (e) => {
        e.preventDefault();
        dispatch(editTodo(_id, editPayload));
        switchEdit();
    };
    const checkThis = (e) => {
        e.preventDefault();
        dispatch(checkTodo(_id, { done: !done }));
    };

    const [isEdit, setIsEdit] = useState(false);

    //initial input values
    useEffect(() => {
        setInputs((i) => ({
            ...i,
            title,
            hour,
            minute,
        }));
    }, [isEdit]);
    const eventHandler = (e) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            switchEdit();
        }
    };

    //!
    //!Editing
    //!
    if (isEdit) {
        if (isEdit) document.addEventListener("mousedown", eventHandler);

        return (
            <Container ref={containerRef}>
                <p>Hour:</p>
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <Select
                        name="hour"
                        value={inputs.hour}
                        onChange={handleInputChange}
                        type="number"
                        startNumber="0"
                        lastNumber="24"
                    />
                    :
                    <Select
                        name="minute"
                        value={inputs.minute}
                        onChange={handleInputChange}
                        type="number"
                        startNumber="0"
                        lastNumber="59"
                        divider="5"
                    />
                </div>

                <ModalItem
                    value={inputs.title}
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Tytuł"
                />

                <div>
                    <Tick className="edit" onClick={editThis} />
                    <Close className="delete" onClick={switchEdit} />
                </div>
            </Container>
        );
    }

    //!
    //!normal
    //!
    document.removeEventListener("mousedown", eventHandler);
    return (
        <Container done={done}>
            <Circle onClick={checkThis} className="circle" />
            <div>{convertedHour}</div>
            <div>{title}</div>
            <div>
                <Edit className="edit" onClick={switchEdit} />
                <Delete className="delete" onClick={deleteThis} />
            </div>
        </Container>
    );
};

export const ClearTodo = ({ todo = {} }) => {
    return (
        <Container>
            {" "}
            <div>{todo.hour}</div>
            <div>{todo.title}</div>
        </Container>
    );
};

export default Todo;
