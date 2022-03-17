import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 320px;
    border: 2px solid #fff;
    display: flex;
    position: relative;
    margin: 20px 30px;

    img {
        width: 100%;
        height: 100%;
        background-color: #000;
    }

    @media screen and (max-width: 768px) {
        width: 175px;
        height: 245px;
    }

    @media screen and (max-width: 540px) {
        width: 130px;
        height: 170px;
        margin: 20px 15px;
    }

    @media screen and (max-width: 380px) {
        width: 180px;
        height: 250px;
    }
`;

export const ContentContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #00000090;

    @media (hover: hover) {
        :hover {
            button {
                opacity: 1;
            }
        }
    }
`;

export const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3,
    p {
        color: #fff;
    }

    h3 {
        margin: 10px 0;
    }

    p {
        font-size: 26px;
    }

    @media screen and (max-width: 768px) {
        h3 {
            font-size: 22px;
        }
        p {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 540px) {
        h3 {
            font-size: 15px;
        }
        p {
            font-size: 15px;
        }
    }
`;

export const Information = styled.div`
    align-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
        color: #fff;
        font-size: 20px;
        b {
            color: #c3783b;
        }
    }

    @media screen and (max-width: 768px) {
        p {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 380px) and (max-width: 540px) {
        p {
            font-size: 13px;
        }
    }
`;

export const CancelButton = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    align-self: flex-end;
    width: 100%;
    border: none;
    background-color: #f5152c;
    opacity: 0;
    transition: all 200ms ease;
    p {
        font-size: 26px;
        color: #fff;
        margin: 5px 0;
    }

    @media (hover: hover) {
        :hover {
            cursor: pointer;
        }
    }
`;
