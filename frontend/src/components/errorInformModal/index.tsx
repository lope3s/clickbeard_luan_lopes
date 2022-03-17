import React from "react";
import { Container, Modal, ErrorMessage, ButtonBox } from "./styles";
import { OutlinedButton } from "../";

interface IErrorInformModal {
    error: string;
}

const ErrorInformModal: React.FC<IErrorInformModal> = ({ error }) => {
    return (
        <Container>
            <Modal>
                <ErrorMessage>{error}</ErrorMessage>
                <ButtonBox>
                    <OutlinedButton
                        onClick={() => {
                            window.location.reload();
                        }}
                    >
                        Ok
                    </OutlinedButton>
                </ButtonBox>
            </Modal>
        </Container>
    );
};

export default ErrorInformModal;
