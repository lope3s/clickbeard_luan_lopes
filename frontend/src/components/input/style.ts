import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    input {
        height: 45px;
        border: 2px solid #c3783b;
        background-color: #00000000;
        text-indent: 10px;
        color: #c3783b;
        ::placeholder {
            color: #c3783b;
        }
    }
`;

export const Label = styled.label`
    color: #fff;
`;
