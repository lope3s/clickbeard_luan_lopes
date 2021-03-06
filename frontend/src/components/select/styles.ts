import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    position: relative;

    @media (hover: hover) {
        :hover {
            cursor: pointer;
        }
    }
`;

export const InputDataBox = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    border: 2px solid #c3783b;
    position: relative;
    overflow-y: hidden;
    overflow-x: auto;

    input {
        width: 100%;
        border: none;
        background-color: #00000000;
        text-indent: 10px;
        pointer-events: none;
        ::placeholder {
            color: #c3783b;
        }
    }
`;

export const SvgBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 44px;
    right: 0;
    z-index: 2;
    background-color: #232323;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;

    svg {
        font-size: 1.5rem;
        color: #c3783b;
    }
`;

export const SelectedOptionBox = styled.div`
    height: 45px;
    width: calc(100% - 40px);
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 0 5px;
    overflow-x: auto;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const SelectedOption = styled.div`
    height: 70%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    box-shadow: -3px 3px 1px 1px #000;

    p {
        margin-left: 5px;
    }

    svg {
        margin: 0 5px;
        font-size: 1rem;
    }
`;

export const Label = styled.label`
    color: #fff;
`;

export const OptionsBox = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 102%;
    background-color: #c3783b;
    width: 100%;
    border: 4px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;

    @media (hover: hover) {
        :hover {
            cursor: initial;
        }
    }
`;

export const OptionsBody = styled.div`
    width: 100%;
    max-height: 220px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    overflow: auto;
`;

export const Option = styled.div`
    width: 90%;
    height: 30px;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 5px 0;
    transition: all 200ms;

    p {
        font-size: 22px;
    }

    @media (hover: hover) {
        :hover {
            cursor: pointer;
            background-color: #000;
        }
    }

    @media screen and (max-width: 540px) {
        p {
            font-size: 16px;
        }
    }
`;

export const OptionsBoxFooter = styled.div`
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AddNewSpeciality = styled.div`
    width: 90%;
    height: 30px;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    svg {
        font-size: 1.5rem;
        margin-right: 5px;
    }

    p {
        font-size: 22px;
    }

    @media (hover: hover) {
        :hover {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 540px) {
        p {
            font-size: 16px;
        }
        svg {
            font-size: 1rem;
        }
    }
`;
