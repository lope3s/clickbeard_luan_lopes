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
    width: 30rem;
    height: 35%;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        right: 7px;
        top: 7px;
        font-size: 1.5rem;
        color: #c2783b;

        @media (hover: hover) {
            :hover {
                cursor: pointer;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        width: 40rem;
    }

    @media screen and (max-width: 540px) {
        width: 85%;
    }
`;

export const InputBox = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    height: 180px;

    p {
        color: #f5152c;
    }
`;

export const TitleContainer = styled.div`
    width: 80%;

    div {
        margin-left: 0px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        div {
            h1 {
                font-size: 28px;
            }
        }
    }
`;

export const ButtonBox = styled.div`
    width: 60%;
    margin-bottom: 20px;

    @media screen and (min-width: 1024px) {
        width: 200px;
    }
`;
