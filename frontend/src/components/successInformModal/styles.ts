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
    width: 30%;
    height: 20%;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SuccessMessage = styled.p`
    font-size: 20px;
    color: #c3783b;
    margin: 30px 0;
`;
