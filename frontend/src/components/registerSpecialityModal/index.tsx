import { SetStateAction, Dispatch, useState } from "react";
import { Container, Modal, InputBox } from "./styles";
import { TitleBox, H1, Input, OutlinedButton, LoadingComponent } from "../";
import { useMutation } from "@apollo/client";
import { REGISTER_SPECIALITY } from "../../gqlQueries";
import { ISpecialityData } from "../../types";
import { OperationVariables } from "@apollo/client";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ISpecialityModal {
    setModalControll: Dispatch<SetStateAction<boolean>>;
    refetch: (variables?: Partial<OperationVariables> | undefined) => any;
}

const RegisterSpecialityModal: React.FC<ISpecialityModal> = ({
    setModalControll,
    refetch
}) => {
    const [registerSpeciality, { data, loading, error, reset }] =
        useMutation<ISpecialityData>(REGISTER_SPECIALITY);

    const [speciality, setSpeciality] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const registerData = () => {
        if (!speciality) {
            setErrorMessage("Digite uma especialidade");
            return;
        }

        if (!errorMessage) {
            registerSpeciality({ variables: { speciality } });
        }
    };

    if (data?.registerSpeciality) {
        refetch();
        reset();
        setSpeciality("");
    }

    if (error) {
        setErrorMessage(error.message);
        reset();
    }

    return (
        <Container onClick={() => setModalControll(false)}>
            {loading ? <LoadingComponent /> : null}
            <Modal onClick={(e) => e.stopPropagation()}>
                <AiOutlineCloseCircle onClick={() => setModalControll(false)} />
                <TitleBox>
                    <H1>Cadastrar Especialidade</H1>
                </TitleBox>
                <InputBox>
                    <Input
                        labelText="Epecialidade"
                        placeholder="Especialidade"
                        value={speciality}
                        onChange={(e) => {
                            setErrorMessage("");
                            setSpeciality(e.target.value);
                        }}
                    >
                        {errorMessage ? <p>{errorMessage}</p> : null}
                    </Input>
                </InputBox>
                <OutlinedButton
                    onClick={(e) => {
                        e.preventDefault();
                        registerData();
                    }}
                >
                    Cadastrar
                </OutlinedButton>
            </Modal>
        </Container>
    );
};

export default RegisterSpecialityModal;
