import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

// próxima alteração apenas em 768px;

export const HeaderBox = styled.header`
    height: 85px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

    @media screen and (min-width: 1024px) {
        padding: 0 15%;
    }
`;

export const LinkBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        margin-left: 15px;
        color: #c3783b;
        font-size: 1.2rem;
        transition: all 200ms;
        text-align: center;

        @media (hover: hover) {
            :hover {
                color: #fff;
            }
        }

        @media screen and (max-width: 540px) {
            font-size: 15px;
        }

        @media screen and (max-width: 380px) {
            font-size: 12px;
        }
    }
`;

export const Image = styled.img`
    @media (hover: hover) {
        :hover {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 540px) {
        width: 80px;
    }
`;

export const Body = styled.div`
    width: 100%;
    height: calc(100vh - 85px);
    background-image: url("Bg.png");
    background-color: #232323;
    background-size: cover;
`;

export const ContentContainer = styled.div`
    width: 90%;
    height: 100%;
    //background-color: #232323;
    margin: 0 auto;
    overflow: auto;

    @media screen and (min-width: 1024px) {
        width: 70%;
    }
`;
