import React from "react";
import styled from "styled-components";

const Container = styled.label`
    width: 120px;
`;
const StyledSelect = styled.select`
    width: 100%;
    text-align-last: center;
    height: 25px;
    border-radius: 5px;
    font-size: 16px;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 1px;
    }
`;

const Select = ({
    type,
    title,
    options = [],
    divider = 1,
    startNumber = 0,
    lastNumber = 0,
    ...props
}) => {
    let Items = [];

    switch (type) {
        case "number":
            for (let i = startNumber; i <= lastNumber / divider; i++) {
                Items.push(
                    <option key={i} value={i * divider}>
                        {i * divider}
                    </option>
                );
            }
            break;
        case "word":
            Items = options.map((item, index) => {
                return (
                    <option key={index} value={index}>
                        {item}
                    </option>
                );
            });
            break;
    }

    return (
        <Container>
            <p>{title}</p>
            <StyledSelect {...props}>{Items}</StyledSelect>
        </Container>
    );
};
export default Select;
