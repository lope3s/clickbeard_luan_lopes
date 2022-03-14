import React from "react";
import {
    Container,
    BottomLeftBox,
    BottomRightBox,
    TopLeftBox,
    TopRightBox,
    TitleContainer,
    Form
} from "./styles";
import { H1, TitleBox } from "../index";
import { useLrForm } from "../../hooks/useLrForm";

interface ILrForm {
    postForm: (data: any) => void;
}

const LrForm: React.FC<ILrForm> = ({ postForm, children }) => {
    const { handleSubmit } = useLrForm();

    return (
        <Container>
            <TitleContainer>
                <TitleBox centralizeText={true}>
                    <H1>Cadastro</H1>
                </TitleBox>
            </TitleContainer>

            <Form autoComplete="off" onSubmit={handleSubmit(postForm)}>
                {children}
            </Form>

            <TopLeftBox />
            <TopRightBox />
            <BottomLeftBox />
            <BottomRightBox />
        </Container>
    );
};

export default LrForm;
