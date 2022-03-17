import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const TitleContainer = styled.div`
    width: 100%;
    > div {
        width: 45%;
        margin: 15px 0 0 0;
    }
`;

export const SchedulesContainer = styled.div`
    width: 100%;
    height: calc(100% - 110px);
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: center;
`;
