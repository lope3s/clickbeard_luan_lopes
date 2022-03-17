import React from "react";
import {
    Container,
    HeaderBox,
    Body,
    ContentContainer,
    LinkBox,
    Image
} from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { IModel, IUser } from "../../types";

const Header: React.FC = ({ children }) => {
    const { token, isAdmin } = useStoreState<IModel, IUser>(
        (state) => state.userModel
    );

    const setUser = useStoreActions<IModel>(
        (actions) => actions.userModel.setUser
    );

    const logout = () => {
        localStorage.removeItem("@clickbeard");
        setUser({ token: "", name: "", isAdmin: false });
        return;
    };

    return (
        <Container>
            <HeaderBox>
                <Link to="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <LinkBox>
                    {token ? (
                        <>
                            <Link to="/agendamentos">Agendamentos</Link>
                            <>
                                {token && !isAdmin ? (
                                    <Link to="/agendarHorario">
                                        Agendar horário
                                    </Link>
                                ) : token && isAdmin ? (
                                    <Link to="/registrarBarbeiro">
                                        Registrar barbeiro
                                    </Link>
                                ) : null}
                            </>
                            <Link to="/" onClick={logout}>
                                Sair
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/cadastro">Cadastro</Link>
                        </>
                    )}
                </LinkBox>
            </HeaderBox>
            <Body>
                <ContentContainer>{children}</ContentContainer>
            </Body>
        </Container>
    );
};

export default Header;
