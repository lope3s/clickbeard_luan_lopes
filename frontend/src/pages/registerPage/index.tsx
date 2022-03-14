import React from "react";
import { Container, ButtonBox } from "./style";
import { LrForm, Input, OutlinedButton } from "../../components";
import { useLrForm } from "../../hooks/useLrForm";

const RegisterPage: React.FC = () => {
    const postForm = (data: any) => {
        console.log(data);
    };

    const { register } = useLrForm();

    return (
        <Container>
            <LrForm postForm={postForm}>
                <Input
                    id="name"
                    labelText="Nome"
                    placeholder="Digite o seu nome"
                    register={register("name")}
                />
                <Input
                    id="email"
                    labelText="E-mail"
                    placeholder="Digite o seu e-mail"
                    register={register("email")}
                />
                <Input
                    id="password"
                    labelText="Senha"
                    placeholder="Digite a sua senha"
                    type="password"
                    register={register("password")}
                />
                <ButtonBox>
                    <OutlinedButton type="submit">Cadastrar</OutlinedButton>
                </ButtonBox>
            </LrForm>
        </Container>
    );
};

export default RegisterPage;
