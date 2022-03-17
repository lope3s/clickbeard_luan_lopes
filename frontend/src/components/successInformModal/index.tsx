import React from "react";
import { Container, Modal, SuccessMessage, ButtonBox } from "./styles";
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
        <Container onClick={(e) => e.stopPropagation()}>
            <Modal>
                <SuccessMessage>{successMessage}</SuccessMessage>
                <ButtonBox>
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
                </ButtonBox>
            </Modal>
        </Container>
    );
};

export default SuccessInformModal;
