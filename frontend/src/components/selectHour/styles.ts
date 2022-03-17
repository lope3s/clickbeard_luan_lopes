import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border: 10px solid #c3783b;
    background-color: #000;
    box-sizing: border-box;
    display: flex;
`;

export const ContentContainer = styled.div`
    width: 80%;
`;

export const DateContainer = styled.div`
    color: #fff;
    font-size: 26px;
    margin: 10px;
`;

export const BarberFreeTimeText = styled.p`
    margin: 22px 0;
    color: #fff;
    font-size: 18px;
`;

export const InputContainer = styled.div`
    width: calc(100% - 20px);
    margin: 10px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const ArrowContainer = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms;

    svg {
        font-size: 5rem;
        color: #c3783b;

        @media (hover: hover) {
            :hover {
                cursor: pointer;
                color: #fff;
            }
        }
    }
`;

export const ErrorMessage = styled.p`
    color: #f5152c;
`;
