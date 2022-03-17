import React, { useState } from "react";
import {
    Container,
    ContentContainer,
    CancelButton,
    Header,
    Information
} from "./styles";
import { H3 } from "../";
import schedule from "../../assets/schedule.png";
import { ISchedule, IModel, IUser, ICancelSchedule } from "../../types";
import { parseDateString } from "../../helpers";
import { useStoreState } from "easy-peasy";
import { useMutation, OperationVariables } from "@apollo/client";
import { CANCEL_SCHEDULE } from "../../gqlQueries";
import { LoadingComponent, ErrorInformModal, ConfirmScheduleDelete } from "../";

interface IScheduleComponent {
    cardData: ISchedule;
    refetchCb: (variables?: Partial<OperationVariables> | undefined) => any;
}

const ScheduleComponent: React.FC<IScheduleComponent> = ({
    cardData,
    refetchCb
}) => {
    const [modalWindow, setWindow] = useState(false);

    const [cancelSchedule, { data, loading, error, reset }] =
        useMutation<ICancelSchedule>(CANCEL_SCHEDULE);

    const { isAdmin } = useStoreState<IModel, IUser>(
        (state) => state.userModel
    );

    if (data?.cancelSchedule && !modalWindow) {
        setWindow(true);
        refetchCb();
        reset();
    }

    return (
        <>
            {loading ? <LoadingComponent /> : null}
            {error ? <ErrorInformModal error={error.message} /> : null}
            {modalWindow ? (
                <ConfirmScheduleDelete
                    setWindow={setWindow}
                    cancelCb={cancelSchedule}
                    scheduleId={cardData.id}
                />
            ) : null}
            <Container>
                <img src={schedule} alt="scheduleImage" />
                <ContentContainer>
                    <Header>
                        <H3>
                            {parseDateString(cardData.scheduledHour, {
                                weekday: "long"
                            })}
                        </H3>
                        <p>
                            Dia{" "}
                            {parseDateString(cardData.scheduledHour, {
                                day: "2-digit",
                                month: "2-digit"
                            })}
                        </p>
                        <p>
                            {parseDateString(cardData.scheduledHour, {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </p>
                    </Header>
                    <Information>
                        <p>
                            Barbeiro(a):{" "}
                            <b>{cardData.barberName.toUpperCase()}</b>
                        </p>
                        {isAdmin ? (
                            <p>
                                Cliente:{" "}
                                <b>{cardData.clientName.toLocaleUpperCase()}</b>
                            </p>
                        ) : null}
                    </Information>
                    {!isAdmin ? (
                        <CancelButton onClick={() => setWindow(true)}>
                            <p>Cancelar</p>
                        </CancelButton>
                    ) : null}
                </ContentContainer>
            </Container>
        </>
    );
};

export default ScheduleComponent;
