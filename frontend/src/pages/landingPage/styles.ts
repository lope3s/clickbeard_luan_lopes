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

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const DescriptiveBox = styled.div`
    width: 30rem;
    background-color: #232323;
    border-bottom: 15px solid #c3783b;

    p {
        color: #fff;
        font-size: 1rem;
        width: 90%;
        margin: 35px auto;
    }

    @media screen and (max-width: 540px) {
        width: 90%;

        p {
            font-size: 13px;
        }
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 768px) {
        margin-top: 30px;
    }
`;
