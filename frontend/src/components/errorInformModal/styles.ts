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
    z-index: 2;
`;

export const Modal = styled.div`
    width: 15rem;
    min-height: 12rem;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ErrorMessage = styled.p`
    font-size: 20px;
    color: #f5152c;
    margin: 30px 0;
    text-align: center;
`;

export const ButtonBox = styled.div`
    width: 60%;
`;
