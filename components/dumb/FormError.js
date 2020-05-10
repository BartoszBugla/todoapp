import React from "react";
import styled from "styled-components";
const Container = styled.div`
    background-color: ${(props) => (props.type === "positive" ? "#90ee90" : "#fc8f8f")};
    margin: 10px 0;
    padding: 5px;
    transition: 0.5s;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Xdiv = styled.div`
    padding-right: 5px;
    svg {
        height: 15px;
        width: 15px;
        fill: white;
        path {
            fill: black;
        }
    }
`;

const Error = ({ message }) => {
    const container = useRef(null);
    const closeError = () => {
        container.current.remove();
    };
    return (
        <Container ref={container}>
            <Xdiv onClick={closeError}>
                <CrossMark />
            </Xdiv>
            <p>{message}</p>
        </Container>
    );
};

export default Error;
