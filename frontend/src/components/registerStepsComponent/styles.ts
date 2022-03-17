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

    // responsive until 1024px;
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
`;
