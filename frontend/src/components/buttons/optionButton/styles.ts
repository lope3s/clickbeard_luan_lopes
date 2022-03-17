import styled from "styled-components";

export const OptionButtonElement = styled.div`
    width: 100%;
    button {
        width: 100%;
        height: 30px;
        color: #c3783b;
        margin: 5px 0;
        font-size: 22px;
        border: none;
        box-shadow: -2px 2px 1px 1px #000;
        transition: all 200ms;
        background-color: #fff;

        @media (hover: hover) {
            :hover {
                cursor: pointer;
                background-color: #000;
            }
        }
    }
`;
