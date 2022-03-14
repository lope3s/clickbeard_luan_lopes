import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const DescriptiveBox = styled.div`
    width: 30rem;
    height: 20rem;
    background-color: #232323;
    border-bottom: 15px solid #c3783b;

    p {
        color: #fff;
        font-size: 1rem;
        width: 90%;
        margin: 35px auto;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    align-items: flex-end;
`;
