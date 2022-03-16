import React from "react";
import { Container, Modal, SuccessMessage } from "./styles";
import { OutlinedButton } from "../";

interface ISuccessInformModal {
    successMessage: string;
    setWindow: React.Dispatch<React.SetStateAction<boolean>>;
    reset?: () => void;
}

const SuccessInformModal: React.FC<ISuccessInformModal> = ({
    successMessage,
    setWindow,
    reset
}) => {
    return (
        <Container>
            <Modal>
                <SuccessMessage>{successMessage}</SuccessMessage>
                <OutlinedButton
                    onClick={() => {
                        setWindow(false);
                        if (reset) {
                            reset();
                        }
                    }}
                >
                    Ok
                </OutlinedButton>
            </Modal>
        </Container>
    );
};

export default SuccessInformModal;
