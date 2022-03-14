import styled from "styled-components";

interface IBox {
    center: boolean;
}

export const Box = styled.div<IBox>`
    margin: 0 auto;
    width: 90%;
    height: fit-content;
    border-bottom: 4px solid #c3783b;
    margin-top: 15px;
    text-align: ${(props) => props.center && "center"};
`;
