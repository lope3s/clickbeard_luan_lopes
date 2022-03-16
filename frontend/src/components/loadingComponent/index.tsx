import React from "react";
import { Container, Loading, LogoContainer, Box } from "./styles";
import logo from "../../assets/logo.png";
import { H3 } from "..";

const LoadingComponent: React.FC = () => {
    return (
        <Container>
            <Box>
                <Loading />
                <LogoContainer src={logo} alt="logo" />
                <H3>Carregando...</H3>
            </Box>
        </Container>
    );
};

export default LoadingComponent;
