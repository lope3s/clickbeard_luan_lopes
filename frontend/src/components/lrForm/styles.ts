import styled from "styled-components";

interface IContainer {
    page: "cadastro" | "login" | "registerBarber";
}

export const Container = styled.div<IContainer>`
    width: calc(100% - 10px);
    height: ${(props) => (props.page === "registerBarber" ? "95%" : "75%")};
    background-color: #232323;
    position: relative;
    margin: 0 auto;

    @media screen and (min-width: 540px) {
        width: 80%;
    }
`;

export const TitleContainer = styled.div`
    width: 25rem;
    margin: 25px auto;

    @media screen and (max-width: 768px) {
        width: 70%;
    }
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

    @media screen and (max-width: 380px) {
        width: calc(100% - 50px);
    }
`;

export const ButtonBox = styled.div`
    align-self: center;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 260px;
    }
`;

export const ErrorText = styled.p`
    font-size: 1rem;
    color: #f5152c;
    margin-top: 5px;
`;
