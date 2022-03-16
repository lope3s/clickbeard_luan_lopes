import React, { useState } from "react";
import { Container } from "./styles";
import { LrForm, LoadingComponent, SuccessInformModal } from "../../components";
import { IFormData, IRegisterBarber, IModel, IUser } from "../../types";
import { useMutation } from "@apollo/client";
import { REGISTER_BARBER } from "../../gqlQueries";
import { useStoreState } from "easy-peasy";
import { Navigate } from "react-router-dom";

const RegisterBarberPage: React.FC = () => {
    const { isAdmin } = useStoreState<IModel, IUser>(
        (state) => state.userModel
    );

    const [modalWindow, setWindow] = useState(false);
    const [registerBarber, { loading, error, data, reset }] =
        useMutation<IRegisterBarber>(REGISTER_BARBER);

    const postForm = (data: IFormData) => {
        const specialities = data.speciality.map((value) => value.id);
        registerBarber({
            variables: {
                name: data.name,
                hiringDate: data.hiringDate,
                age: parseInt(data.age),
                specialities
            }
        });
    };

    if (data?.registerBarber && !modalWindow) {
        setWindow(true);
    }

    if (!isAdmin) {
        return <Navigate to="/agendamentos" replace={true} />;
    }

    return (
        <Container>
            {loading ? <LoadingComponent /> : null}
            {modalWindow ? (
                <SuccessInformModal
                    setWindow={setWindow}
                    reset={reset}
                    successMessage={`Barbeiro(a) ${data?.registerBarber.name} registrado com sucesso!`}
                />
            ) : null}
            <LrForm page="registerBarber" postForm={postForm} error={error} />
        </Container>
    );
};

export default RegisterBarberPage;
