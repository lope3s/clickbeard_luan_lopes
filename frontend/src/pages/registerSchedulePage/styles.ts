import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #232323;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const StepsContainer = styled.div`
    width: 80%;
    height: 200px;
    position: absolute;
    top: 0px;
`;

export const InformationBox = styled.div`
    width: 80%;
`;

export const ConfirmationBox = styled.div`
    width: 50%;
    height: 500px;
    border: 3px solid #c2783b;
    margin: 0 auto;
    background-color: #000;
`;

export const TitleContainer = styled.div`
    div {
        width: 50%;
        border-color: #fff;
        margin: 20px 0 0 20px;
        h1 {
            color: #fff;
        }
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InformationResume = styled.div`
    width: 80%;
    margin: 20px auto;
    height: calc(100% - 191px);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        font-size: 20px;
        b {
            color: #c3783b;
        }
    }
`;

export const Footer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 50px;

    button {
        background-color: #000;
        border: 3px solid #c2783b;
        color: #fff;
        width: 100px;
        height: 50px;
        font-size: 20px;

        @media (hover: hover) {
            :hover {
                cursor: pointer;
            }
        }
    }
`;
