import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 75%;
    background-color: #232323;
    position: relative;
    margin: 0 auto;
`;

export const TitleContainer = styled.div`
    width: 15rem;
    margin: 25px auto;
`;

export const TopLeftBox = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    top: -5px;
    left: -5px;
    border-left: 5px solid #c3783b;
    border-top: 5px solid #c3783b;
`;

export const TopRightBox = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    top: -5px;
    right: -5px;
    border-right: 5px solid #c3783b;
    border-top: 5px solid #c3783b;
`;

export const BottomLeftBox = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: -5px;
    left: -5px;
    border-left: 5px solid #c3783b;
    border-bottom: 5px solid #c3783b;
`;

export const BottomRightBox = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: -5px;
    right: -5px;
    border-right: 5px solid #c3783b;
    border-bottom: 5px solid #c3783b;
`;

export const Form = styled.form`
    width: calc(100% - 100px);
    height: calc(100% - 105px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
