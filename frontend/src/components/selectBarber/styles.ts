import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
`;

export const SpecialitiesContainer = styled.div`
    width: 15rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #c3783b;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-height: 250px;
        margin-bottom: 20px;
    }
`;

export const TitleContainer = styled.div`
    width: 80%;
    div {
        border-color: #fff;
        margin: 15px 0 15px 0;

        h3 {
            color: #fff;
            margin-bottom: 5px;
        }
    }
`;

export const OptionButtonContainer = styled.div`
    width: 80%;
    height: 285px;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    @media screen and (max-width: 768px) {
        height: 150px;
    }
`;

export const BarbersContainer = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    height: 400px;
    overflow: auto;

    @media screen and (max-width: 768px) {
        flex: initial;
        justify-content: center;
        width: 100%;
        padding: 0;
    }
`;

export const BarberCard = styled.div`
    width: 120px;
    height: 120px;
    position: relative;
    margin: 0 5px 10px 5px;
    transition: all 200ms;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 100%;
    }

    > div {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #fff;

        div {
            border-bottom: 3px solid #f5152c;
            margin-bottom: 10px;
            max-width: 120px;
            p {
                text-align: center;
                font-size: 26px;
            }
        }
    }

    @media (hover: hover) {
        :hover {
            cursor: pointer;
            border: 1px solid #fff;
        }
    }
`;

export const NoContentBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 36px;
        color: #fff;
        text-align: center;
    }

    @media screen and (max-width: 540px) {
        p {
            font-size: 20px;
            margin: 0;
        }
    }
`;
