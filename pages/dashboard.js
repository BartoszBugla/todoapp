import React from "react";

import Layout from "../components/layout";
import Navbar from "../components/smart/Navbar";
import { Auth } from "../customHooks/authMiddleware";
import DayPage from "../components/smart/DayPage";
import styled from "styled-components";
import TodosList from "../components/smart/TodosList";
import InstancesWindow from "../components/dumb/InstancesWindow";
import AddTodoModal from "../components/smart/AddTodoModal";
import { getTodos } from "../customHooks/handleRequests";
const Container = styled.div`
    display: grid;
    grid-template-columns: 250px auto 250px;
`;
const dashboard = () => {
    return (
        <Layout title="Dashboard">
            <Container>
                <Navbar />
                <TodosList>
                    <DayPage />
                </TodosList>
                <InstancesWindow />
                <AddTodoModal />
            </Container>
        </Layout>
    );
};

export default dashboard;
