import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const HeaderBox = styled.header`
    height: 85px;
    background-color: #000000;
    padding: 0 15%;
    display: flex;
    justify-content: space-between;
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

        @media (hover: hover) {
            :hover {
                color: #fff;
            }
        }
    }
`;

export const Image = styled.img`
    @media (hover: hover) {
        :hover {
            cursor: pointer;
        }
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
    width: 70%;
    height: 100%;
    margin: 0 auto;
    //background-color: #232323;
`;
