import React, { useState } from "react";
import {
    Container,
    DateContainer,
    InputContainer,
    ButtonContainer,
    ContentContainer,
    ArrowContainer,
    BarberFreeTimeText,
    ErrorMessage
} from "./styles";
import { GET_BARBER_FREE_TIME } from "../../gqlQueries";
import { useQuery } from "@apollo/client";
import { useScheduleRegister } from "../../hooks/useScheduleRegister";
import { Input, OutlinedButton, LoadingComponent, ErrorInformModal } from "../";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IGetBarberFreeTime } from "../../types";
import {
    addHourMask,
    parseDateString,
    returnBarberFreeTime,
    setDate,
    checkSelectedHour
} from "../../helpers";

interface ISelectHour {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const SelectHour: React.FC<ISelectHour> = ({ counter, setCounter }) => {
    const { scheduleRegistryData, setScheduleRegistryData } =
        useScheduleRegister();
    const [date, setStateDate] = useState(setDate());
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState("");

    const { data, loading, error } = useQuery<IGetBarberFreeTime>(
        GET_BARBER_FREE_TIME,
        {
            variables: {
                barberId: scheduleRegistryData.barberId,
                date: date.toUTCString()
            }
        }
    );

    const callNextStep = () => {
        if (!inputError) {
            if (inputValue) {
                const splitedValue = inputValue.split(":");

                if (
                    parseInt(splitedValue[0]) > 24 ||
                    parseInt(splitedValue[1]) > 59
                ) {
                    setInputError("Formato inválido de hora");
                    return;
                }

                if (
                    parseInt(splitedValue[0]) > 18 ||
                    parseInt(splitedValue[0]) < 8
                ) {
                    setInputError("Fora do horário de funcionamento");
                    return;
                }

                const scheduleDate = new Date(date);
                scheduleDate.setHours(
                    parseInt(splitedValue[0]),
                    parseInt(splitedValue[1]),
                    0,
                    0
                );

                if (data?.getBarberFreeTime.length) {
                    const availableTimeList = returnBarberFreeTime(
                        data!.getBarberFreeTime
                    );

                    const isBarberAvailableTime = checkSelectedHour(
                        availableTimeList,
                        scheduleDate
                    );

                    if (!isBarberAvailableTime) {
                        setInputError("Horário indisponível");
                        return;
                    }
                }

                setScheduleRegistryData({
                    ...scheduleRegistryData,
                    scheduledHour: scheduleDate.toUTCString()
                });
                setCounter(counter + 1);
                return;
            }

            setInputError("Digite um horário");
            return;
        }
    };

    return (
        <>
            {loading ? <LoadingComponent /> : null}
            {error ? <ErrorInformModal error={error.message} /> : null}
            <Container>
                <ArrowContainer>
                    {date > setDate() ? (
                        <MdKeyboardArrowLeft
                            onClick={() => {
                                const newDate = new Date(
                                    date.setDate(date.getDate() - 1)
                                );
                                setStateDate(newDate);
                            }}
                        />
                    ) : null}
                </ArrowContainer>
                <ContentContainer>
                    <DateContainer>
                        <p>
                            {parseDateString(date.toString(), {
                                weekday: "long",
                                day: "2-digit"
                            })}
                        </p>
                        <BarberFreeTimeText>
                            Barbeiro(a){" "}
                            {data?.getBarberFreeTime.length
                                ? "livre de " +
                                  returnBarberFreeTime(data.getBarberFreeTime)
                                : "livre o dia todo"}
                        </BarberFreeTimeText>
                    </DateContainer>
                    <InputContainer>
                        <Input
                            labelText="Hora do agendamento"
                            placeholder="08:00"
                            value={inputValue}
                            onChange={(e) => {
                                addHourMask(e, setInputValue, setInputError);
                            }}
                            maxLength={5}
                        >
                            <ErrorMessage>{inputError}</ErrorMessage>
                        </Input>
                    </InputContainer>
                    <ButtonContainer>
                        <OutlinedButton onClick={callNextStep}>
                            Confirmar
                        </OutlinedButton>
                    </ButtonContainer>
                </ContentContainer>
                <ArrowContainer>
                    <MdKeyboardArrowRight
                        onClick={() => {
                            const newDate = new Date(
                                date.setDate(date.getDate() + 1)
                            );
                            setStateDate(newDate);
                        }}
                    />
                </ArrowContainer>
            </Container>
        </>
    );
};

export default SelectHour;
