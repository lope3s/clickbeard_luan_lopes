import React from "react";
import { Container, Modal, ErrorMessage } from "./styles";
import { OutlinedButton } from "../";

interface IErrorInformModal {
    error: string;
}

const ErrorInformModal: React.FC<IErrorInformModal> = ({ error }) => {
    return (
        <Container>
            <Modal>
                <ErrorMessage>{error}</ErrorMessage>
                <OutlinedButton
                    onClick={() => {
                        window.location.reload();
                    }}
                >
                    Ok
                </OutlinedButton>
            </Modal>
        </Container>
    );
};

export default ErrorInformModal;
