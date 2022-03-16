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

    > svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 2%;
        z-index: 1;
        font-size: 1.5rem;
        color: #c3783b;
    }

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
export const SelectedOptionBox = styled.div`
    height: 45px;
    width: 90%;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 0 5px;
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

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: #000;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 5px;
    }
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

    p {
        font-size: 22px;
    }

    @media (hover: hover) {
        :hover {
            cursor: pointer;
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
`;
