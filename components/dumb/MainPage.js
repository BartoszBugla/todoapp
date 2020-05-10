import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../layout";
import Hero from "./Hero";

const MainPage = ({ title, children }) => {
    return (
        <Layout title={title}>
            <Hero />
            <FormContainer>{children}</FormContainer>
        </Layout>
    );
};
export default MainPage;
