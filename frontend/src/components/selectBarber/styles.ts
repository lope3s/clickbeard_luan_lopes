import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
`;

export const SpecialitiesContainer = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #c3783b;
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
`;

export const BarbersContainer = styled.div`
    flex: 3;
    margin-left: 90px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    height: 400px;
    overflow: auto;
`;

export const BarberCard = styled.div`
    width: 180px;
    height: 180px;
    position: relative;
    margin: 0 10px 10px 10px;
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

    p {
        margin-left: 50px;
        font-size: 36px;
        color: #fff;
    }
`;
