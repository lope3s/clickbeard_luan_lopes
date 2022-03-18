import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Loading = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 10px solid #c3783b00;
    border-left-color: #c3783b;
    animation: rotate 1s infinite ease;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const LogoContainer = styled.img`
    width: 100px;
    height: 70px;
    position: absolute;
    top: 22%;
    left: 22%;
    margin: 0 auto;
    border-radius: 10px;

    animation: changeSize 1.5s infinite ease-in;

    @keyframes changeSize {
        from {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        to {
            transform: scale(1);
        }
    }
`;

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        margin-top: 50px;
    }
`;
