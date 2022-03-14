import styled from "styled-components";

export const ButtonElement = styled.div`
    button {
        width: 220px;
        height: 60px;
        border: none;
        background-color: #c3783b;
        box-shadow: -3px 3px 1px 1px #bfbfbf50;
        color: #fff;
        font-size: 36px;
        transition: all 200ms;

        @media (hover: hover) {
            :hover {
                cursor: pointer;
                background-color: #bfbfbf50;
                border: 3px solid #c3783b;
            }
        }
    }
`;
