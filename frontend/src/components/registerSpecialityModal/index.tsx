import { SetStateAction, Dispatch, useState } from "react";
import {
    Container,
    Modal,
    InputBox,
    ButtonBox,
    TitleContainer
} from "./styles";
import {
    TitleBox,
    H1,
    Input,
    OutlinedButton,
    LoadingComponent,
    SuccessInformModal
} from "../";
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
    const [modalWindow, setWindow] = useState(false);

    const registerData = () => {
        if (!speciality) {
            setErrorMessage("Digite uma especialidade");
            return;
        }

        if (!errorMessage) {
            registerSpeciality({ variables: { speciality } });
        }
    };

    if (data?.registerSpeciality && !modalWindow) {
        setWindow(true);
        refetch();
        setSpeciality("");
    }

    if (error) {
        setErrorMessage(error.message);
        reset();
    }

    return (
        <Container onClick={() => setModalControll(false)}>
            {loading ? <LoadingComponent /> : null}
            {modalWindow ? (
                <SuccessInformModal
                    setWindow={setWindow}
                    reset={reset}
                    successMessage={`Especialidade ${data?.registerSpeciality.speciality} registrada com sucesso!`}
                />
            ) : null}
            <Modal onClick={(e) => e.stopPropagation()}>
                <AiOutlineCloseCircle onClick={() => setModalControll(false)} />
                <TitleContainer>
                    <TitleBox>
                        <H1>Cadastrar Especialidade</H1>
                    </TitleBox>
                </TitleContainer>
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
                <ButtonBox>
                    <OutlinedButton
                        onClick={(e) => {
                            e.preventDefault();
                            registerData();
                        }}
                    >
                        Cadastrar
                    </OutlinedButton>
                </ButtonBox>
            </Modal>
        </Container>
    );
};

export default RegisterSpecialityModal;
