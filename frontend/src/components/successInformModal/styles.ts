import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000090;
    z-index: 3;
`;

export const Modal = styled.div`
    width: 15rem;
    height: 20%;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1024px) {
        width: 20rem;
    }
`;

export const SuccessMessage = styled.p`
    font-size: 20px;
    color: #c3783b;
    margin: 30px;
    text-align: center;
`;

export const ButtonBox = styled.div`
    width: 60%;
    margin-bottom: 30px;

    @media screen and (min-width: 1024px) {
        width: 200px;
    }
`;
