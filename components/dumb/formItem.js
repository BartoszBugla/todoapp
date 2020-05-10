import styled from "styled-components";

const Container = styled.label`
    font-size: 1.4rem;
    color: black;
    display: flex;
    flex-direction: column;
    svg {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        fill: black;
    }
    div {
        display: flex;
        flex-direction: row;
    }
`;
const Input = styled.input`
    border-radius: 10px;
    height: 35px;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid #ffffff;
    font-size: 1em;
    color: #2e2e2e;
    position: relative;
    padding: 0 20px;
    transition: all 150ms;
    &::placeholder {
        color: #666666;
    }
    &:focus {
        border: 2px solid #93acec;
    }
`;

//* custom props "label" another are for input
const FormItem = (props) => {
    return (
        <Container>
            <p>{props.label}</p>
            <div>
                {props.svg} <Input {...props} />
            </div>
        </Container>
    );
};

export default FormItem;
