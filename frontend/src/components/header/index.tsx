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

const Header: React.FC = ({ children }) => {
    return (
        <Container>
            <HeaderBox>
                <Link to="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <LinkBox>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>
                </LinkBox>
            </HeaderBox>
            <Body>
                <ContentContainer>{children}</ContentContainer>
            </Body>
        </Container>
    );
};

export default Header;
