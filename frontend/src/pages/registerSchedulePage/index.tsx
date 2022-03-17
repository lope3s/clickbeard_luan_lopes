import React, { useState } from "react";
import {
    Container,
    StepsContainer,
    Footer,
    InformationBox,
    ConfirmationBox,
    InformationResume,
    ButtonContainer,
    TitleContainer
} from "./styles";
import {
    RegisterStepsComponent,
    OutlinedButton,
    SelectHour,
    SelectBarber,
    TitleBox,
    H1,
    ErrorInformModal,
    LoadingComponent,
    SuccessInformModal
} from "../../components";
import { useScheduleRegister } from "../../hooks/useScheduleRegister";
import { CREATE_SCHEDULE, LIST_SCHEDULES } from "../../gqlQueries";
import { useMutation } from "@apollo/client";
import { parseDateString } from "../../helpers";
import { ICreateSchedule } from "../../types";

const RegisterSchedulePage: React.FC = () => {
    const [counter, setCounter] = useState(0);
    const [modalWindow, setWindow] = useState(false);

    const { scheduleRegistryData, extraData } = useScheduleRegister();

    const [createSchedule, { data, loading, error, reset, client }] =
        useMutation<ICreateSchedule>(CREATE_SCHEDULE);

    if (data?.createSchedule && !modalWindow) {
        setWindow(true);
        setCounter(0);
    }

    return (
        <Container>
            {loading ? <LoadingComponent /> : null}
            {error ? <ErrorInformModal error={error.message} /> : null}
            {data ? (
                <SuccessInformModal
                    setWindow={setWindow}
                    successMessage={`Seu agendamento para ${parseDateString(
                        data.createSchedule.scheduledHour,
                        {
                            weekday: "short",
                            hour: "numeric"
                        }
                    )} com ${data.createSchedule.barberName.toLocaleUpperCase()} foi realizado com sucesso!`}
                    reset={reset}
                />
            ) : null}
            <StepsContainer>
                <RegisterStepsComponent counter={counter} />
            </StepsContainer>
            <InformationBox>
                {counter === 0 ? (
                    <SelectBarber counter={counter} setCounter={setCounter} />
                ) : counter === 1 ? (
                    <SelectHour counter={counter} setCounter={setCounter} />
                ) : (
                    <ConfirmationBox>
                        <TitleContainer>
                            <TitleBox>
                                <H1>Confirmar</H1>
                            </TitleBox>
                        </TitleContainer>
                        <InformationResume>
                            <div>
                                <p>
                                    Quando é:{" "}
                                    <b>
                                        {parseDateString(
                                            scheduleRegistryData.scheduledHour,
                                            {
                                                weekday: "short",
                                                hour: "numeric"
                                            }
                                        )}{" "}
                                        horas
                                    </b>
                                </p>
                                <p>
                                    Quem me atenderá:{" "}
                                    <b>{extraData.barberName.toUpperCase()}</b>
                                </p>
                                <p>
                                    Tipo de expecialidade:{" "}
                                    <b>{extraData.speciality}</b>
                                </p>
                            </div>
                        </InformationResume>
                        <ButtonContainer>
                            <OutlinedButton
                                onClick={async () => {
                                    await createSchedule({
                                        variables: {
                                            barberId:
                                                scheduleRegistryData.barberId,
                                            scheduledHour:
                                                scheduleRegistryData.scheduledHour
                                        }
                                    });

                                    await client.refetchQueries({
                                        include: [LIST_SCHEDULES],
                                        updateCache(cache) {
                                            cache.evict({
                                                fieldName: "listSchedules"
                                            });
                                        }
                                    });
                                }}
                            >
                                Marcar
                            </OutlinedButton>
                        </ButtonContainer>
                    </ConfirmationBox>
                )}
            </InformationBox>
            <Footer>
                {counter > 0 ? (
                    <button onClick={() => setCounter(counter - 1)}>
                        Voltar
                    </button>
                ) : null}
            </Footer>
        </Container>
    );
};

export default RegisterSchedulePage;
