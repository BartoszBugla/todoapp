import Head from "next/head";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
    min-height: 100%;
    transition: 100ms;
`;
const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title ? title : ""}</title>
                />
            </Head>
            <Container>{children}</Container>
        </div>
    );
};

export default Layout;
