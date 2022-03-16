import React from "react";
import { Container } from "./style";
import { LrForm, LoadingComponent } from "../../components";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../gqlQueries";
import { useStoreActions } from "easy-peasy";
import { IModel, IRegisterData } from "../../types";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
    const setUser = useStoreActions<IModel>(
        (action) => action.userModel.setUser
    );

    const navigate = useNavigate();

    const [registerUser, { data, loading, error, reset }] =
        useMutation<IRegisterData>(REGISTER_USER);

    const postForm = (data: any) => {
        registerUser({ variables: data });
    };

    if (data) {
        const { __typename, ...rest } = data.registerClient;

        setUser(rest);

        localStorage.setItem(
            "@clickbeard",
            JSON.stringify({ token: rest.token, name: rest.name })
        );
        reset();

        navigate("/agendamentos", { replace: true });
    }

    return (
        <Container>
            {loading ? <LoadingComponent /> : null}
            <LrForm postForm={postForm} page="cadastro" error={error}></LrForm>
        </Container>
    );
};

export default RegisterPage;
