import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ProgressBar = styled.div`
    height: 10px;
    width: 90%;
    left: 7%;
    background-color: #c3783b;
    position: absolute;
    top: 52.5%;
    z-index: -1;

    @media screen and (max-width: 768px) {
        width: 85%;
    }

    @media screen and (max-width: 540px) {
        width: 80%;
        left: 10%;
        top: 52%;
    }

    @media screen and (max-width: 380px) {
        top: 51%;
    }
`;

export const StatusBar = styled.div`
    height: 10px;
    width: 0px;
    background-color: #fff;
`;

export const StepsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

interface IStep {
    active: boolean;
}

export const Step = styled.div<IStep>`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${(props) => (props.active ? "#fff" : "#c3783b")};

    @media screen and (max-width: 540px) {
        width: 30px;
        height: 30px;
    }
`;

export const StepBox = styled.div<IStep>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    p {
        color: ${(props) => (props.active ? "#fff" : "#c3783b")};
        font-size: 20px;
    }

    @media screen and (max-width: 540px) {
        p {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 380px) {
        p {
            font-size: 12px;
        }
    }
`;
