import React from "react";
import { Container, Modal, Message, ButtonBox } from "./styles";
import { OutlinedButton } from "../";
import {
    MutationFunctionOptions,
    OperationVariables,
    DefaultContext,
    ApolloCache
} from "@apollo/client";

interface IConfirmScheduleDelete {
    setWindow: React.Dispatch<React.SetStateAction<boolean>>;
    cancelCb: (
        options?:
            | MutationFunctionOptions<
                  any,
                  OperationVariables,
                  DefaultContext,
                  ApolloCache<any>
              >
            | undefined
    ) => any;
    scheduleId: string;
}

const ConfirmScheduleDelete: React.FC<IConfirmScheduleDelete> = ({
    setWindow,
    cancelCb,
    scheduleId
}) => {
    return (
        <Container>
            <Modal>
                <Message>Deseja mesmo cancelar o agendamento?</Message>
                <ButtonBox>
                    <OutlinedButton
                        onClick={() => {
                            cancelCb({ variables: { scheduleId } });
                            setWindow(false);
                        }}
                    >
                        Sim
                    </OutlinedButton>
                    <OutlinedButton
                        onClick={() => {
                            setWindow(false);
                        }}
                    >
                        Não
                    </OutlinedButton>
                </ButtonBox>
            </Modal>
        </Container>
    );
};

export default ConfirmScheduleDelete;
