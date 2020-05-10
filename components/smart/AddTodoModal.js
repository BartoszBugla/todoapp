//dev
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, connect } from "react-redux";
//items
import FormItem from "../dumb/formItem";
import SubmitButton from "../dumb/SubmitButton";
import Select from "../dumb/Select";
import Todo from "../dumb/Todo";
//actions
import { CLOSE_MODAL, UPDATE_MODAL } from "../../redux/actions/types";
import { addTodo } from "../../redux/actions/todosActions";
import { useForms } from "../../customHooks/formHook";

const BG = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;
const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;
const Form = styled.form`
    width: 50%;
    margin: auto;
    & > * {
        margin-top: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Box = styled.div`
    height: 600px;
    width: 50vw;
    background-color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: 10px;
`;
const Title = styled.h6`
    font-size: 26px;
    text-align: center;
    width: 100%;
    font-family: "Jost";
`;
const ModalItem = styled(FormItem)`
    color: black;
    &::placeholder {
        color: #888888 !important;
    }
`;
const Horizntally = styled.div`
    display: flex;
    flex-direction: center;
    & > * {
        margin: 0 5px;
    }
`;
const months = [
    "",
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
];

const AddTodoModal = () => {
    const dispatch = useDispatch();
    const userID = useSelector((state) => state.Auth.user._id);
    const open = useSelector((state) => state.modal.open);
    const hide = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const { setInputs, inputs, handleInputChange } = useForms();
    const init = useSelector((state) => state.modal);
    useEffect(() => {
        setInputs((inputs) => ({
            ...inputs,
            ...init,
        }));
    }, [open]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            ...inputs,
            userID,
        };
        dispatch(addTodo(body));
    };
    if (!open) return null;
    return (
        <Container>
            <BG onClick={hide}></BG>
            <Box>
                <Form onSubmit={handleSubmit}>
                    <Title>Dodaj Czynność</Title>
                    <ModalItem
                        onChange={handleInputChange}
                        value={inputs.title}
                        name="title"
                        placeholder="Tytuł"
                    />
                    <ModalItem placeholder="Krótki opis" />
                    <Horizntally>
                        <Select
                            name="day"
                            value={inputs.day}
                            onChange={handleInputChange}
                            type="number"
                            title="Dzień"
                            startNumber="1"
                            lastNumber="30"
                        />
                        <Select
                            name="month"
                            value={inputs.month}
                            onChange={handleInputChange}
                            type="word"
                            title="Miesiąc"
                            options={months}
                        />
                        <Select
                            value={inputs.year}
                            onChange={handleInputChange}
                            type="number"
                            title="Rok"
                            startNumber="2020"
                            lastNumber="2023"
                        />
                    </Horizntally>
                    <Horizntally>
                        <Select
                            name="hour"
                            value={inputs.hour}
                            onChange={handleInputChange}
                            type="number"
                            title="Godzina"
                            startNumber="0"
                            lastNumber="24"
                        />
                        <Select
                            name="minute"
                            value={inputs.minute}
                            onChange={handleInputChange}
                            type="number"
                            title="Minuta"
                            startNumber="0"
                            lastNumber="59"
                        />
                    </Horizntally>
                    <p>Podgląd</p>
                    <Todo todos={inputs} />

                    <SubmitButton> Dodaj</SubmitButton>
                </Form>
            </Box>
        </Container>
    );
};

export default AddTodoModal;
