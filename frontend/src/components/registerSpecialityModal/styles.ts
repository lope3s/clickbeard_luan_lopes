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
