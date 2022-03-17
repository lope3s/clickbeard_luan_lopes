import styled from "styled-components";

export const H1Element = styled.h1`
    font-size: 36px;
    color: #c3783b;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 540px) {
        font-size: 28px;
    }

    @media screen and (max-width: 340px) {
        font-size: 20px;
    }
`;
