import styled from "styled-components";

interface IOptionButton {
    isSelected: boolean;
}

export const OptionButtonElement = styled.div<IOptionButton>`
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
        background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};

        @media (hover: hover) {
            :hover {
                cursor: pointer;
                background-color: #000;
            }
        }

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }

        @media screen and (max-width: 540px) {
            font-size: 15px;
        }
    }
`;
