import React, { useState } from "react";
import {
    Container,
    SpecialitiesContainer,
    OptionButtonContainer,
    TitleContainer,
    BarbersContainer,
    BarberCard,
    NoContentBox
} from "./styles";
import { useQuery } from "@apollo/client";
import { LIST_SPECIALITIES } from "../../gqlQueries";
import { IListSpecialityData, IBarber } from "../../types";
import {
    LoadingComponent,
    ErrorInformModal,
    OptionButton,
    H3,
    TitleBox
} from "../";
import barberImage from "../../assets/barber.png";
import { useScheduleRegister } from "../../hooks/useScheduleRegister";

interface ISelectBarber {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const SelectBarber: React.FC<ISelectBarber> = ({ counter, setCounter }) => {
    const { data, loading, error } =
        useQuery<IListSpecialityData>(LIST_SPECIALITIES);

    const [barbers, setBarbers] = useState<IBarber[]>([]);

    const {
        setScheduleRegistryData,
        scheduleRegistryData,
        extraData,
        setExtraData
    } = useScheduleRegister();

    if (data) {
        console.log(data);
    }

    return (
        <>
            {loading ? <LoadingComponent /> : null}
            {error ? <ErrorInformModal error={error.message} /> : null}
            <Container>
                <SpecialitiesContainer>
                    <TitleContainer>
                        <TitleBox>
                            <H3>Selecione a especialidade</H3>
                        </TitleBox>
                    </TitleContainer>
                    <OptionButtonContainer>
                        {React.Children.toArray(
                            data?.listSpecialities.map((value) => (
                                <OptionButton
                                    onClick={() => {
                                        setBarbers([...value.barbers]);
                                        setExtraData({
                                            ...extraData,
                                            speciality: value.speciality
                                        });
                                    }}
                                >
                                    {value.speciality}
                                </OptionButton>
                            ))
                        )}
                    </OptionButtonContainer>
                </SpecialitiesContainer>
                <BarbersContainer>
                    {barbers.length ? (
                        React.Children.toArray(
                            barbers.map((barber) => (
                                <BarberCard
                                    onClick={() => {
                                        setScheduleRegistryData({
                                            ...scheduleRegistryData,
                                            barberId: barber.id
                                        });
                                        setCounter(counter + 1);
                                        setExtraData({
                                            ...extraData,
                                            barberName: barber.name
                                        });
                                    }}
                                >
                                    <img src={barberImage} alt="barberImage" />
                                    <div>
                                        <div>
                                            <p>
                                                {barber.name.toLocaleUpperCase()}
                                            </p>
                                        </div>
                                        <p>{barber.age} anos</p>
                                    </div>
                                </BarberCard>
                            ))
                        )
                    ) : (
                        <NoContentBox>
                            <p>Nenhum Barbeiro encontrado</p>
                        </NoContentBox>
                    )}
                </BarbersContainer>
            </Container>
        </>
    );
};

export default SelectBarber;
