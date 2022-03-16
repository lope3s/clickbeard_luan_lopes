import React from "react";
import { Container } from "./style";
import { LrForm, LoadingComponent } from "../../components";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "../../gqlQueries";
import { useStoreActions } from "easy-peasy";
import { IModel, ILoginData } from "../../types";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const setUser = useStoreActions<IModel>(
        (actions) => actions.userModel.setUser
    );

    const navigate = useNavigate();

    const [loginUser, { loading, error, data }] =
        useLazyQuery<ILoginData>(LOGIN_USER);

    const postForm = (data: any) => {
        loginUser({ variables: data });
    };

    if (data?.login) {
        const { __typename, ...rest } = data.login;

        setUser(rest);

        localStorage.setItem(
            "@clickbeard",
            JSON.stringify({ name: rest.name, token: rest.token })
        );

        navigate("/agendamentos", { replace: true });
    }

    return (
        <Container>
            {loading ? <LoadingComponent /> : null}
            <LrForm page="login" postForm={postForm} error={error} />
        </Container>
    );
};

export default LoginPage;
