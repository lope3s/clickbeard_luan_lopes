import React from "react";
import {
    Container,
    BottomLeftBox,
    BottomRightBox,
    TopLeftBox,
    TopRightBox,
    TitleContainer,
    Form,
    ButtonBox,
    ErrorText
} from "./styles";
import { H1, TitleBox, Input, OutlinedButton, Select } from "../index";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { validateDataInput } from "../../helpers";

interface ILrForm {
    postForm: (data: any) => void;
    page: "cadastro" | "login" | "registerBarber";
    error?: any;
}

const LrForm: React.FC<ILrForm> = ({ postForm, page, error }) => {
    const {
        handleSubmit,
        register,
        setValue,
        getValues,
        formState: { errors },
        trigger,
        clearErrors
    } = useForm();

    return (
        <Container page={page}>
            <TitleContainer>
                <TitleBox centralizeText={true}>
                    <H1>
                        {page === "cadastro"
                            ? "Cadastro"
                            : page === "registerBarber"
                            ? "Registrar Barbeiro"
                            : "Login"}
                    </H1>
                </TitleBox>
            </TitleContainer>

            <Form autoComplete="off" onSubmit={handleSubmit(postForm)}>
                {page !== "login" ? (
                    <Input
                        id="name"
                        labelText="Nome"
                        placeholder="Digite o nome"
                        register={register("name", {
                            required: "Insira um nome"
                        })}
                        type="text"
                    >
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ message }) => (
                                <ErrorText>{message}</ErrorText>
                            )}
                        />
                    </Input>
                ) : null}
                {page !== "registerBarber" ? (
                    <>
                        <Input
                            id="email"
                            labelText="E-mail"
                            placeholder="Digite o seu e-mail"
                            register={register("email", {
                                required: "Insita o e-mail",
                                pattern: {
                                    value: /[a-zA-Z]+[._]*@[a-z]+.com\.*/,
                                    message: "Formato de e-mail inválido"
                                }
                            })}
                            type="email"
                        >
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => (
                                    <ErrorText>{message}</ErrorText>
                                )}
                            />
                        </Input>
                        <Input
                            id="password"
                            labelText="Senha"
                            placeholder="Digite a sua senha"
                            type="password"
                            register={register("password", {
                                required: "Digite a sua senha",
                                minLength: {
                                    value: 4,
                                    message:
                                        "A senha precisa ter ao menos 4 caracteres"
                                }
                            })}
                        >
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                render={({ message }) => (
                                    <ErrorText>{message}</ErrorText>
                                )}
                            />
                        </Input>
                    </>
                ) : null}
                {page === "registerBarber" ? (
                    <>
                        <Select
                            labelText="Especialidade"
                            register={register("speciality", {
                                required: "Escolha ao menos uma especialidade"
                            })}
                            setValue={setValue}
                            getValues={getValues}
                            clearErrors={clearErrors}
                        >
                            <ErrorMessage
                                errors={errors}
                                name="speciality"
                                render={({ message }) => (
                                    <ErrorText>{message}</ErrorText>
                                )}
                            />
                        </Select>
                        <Input
                            id="idade"
                            labelText="Idade"
                            placeholder="Digite uma idade"
                            type="text"
                            register={register("age", {
                                required: "Digite uma idade"
                            })}
                            onChange={async (e: any) => {
                                let inputData: string = e.target.value.replace(
                                    /[^0-9]/g,
                                    ""
                                );

                                const hasError = await trigger("age");

                                if (!hasError) {
                                    clearErrors("hiringDate");
                                }

                                setValue("age", inputData);
                            }}
                        >
                            <ErrorMessage
                                errors={errors}
                                name="age"
                                render={({ message }) => (
                                    <ErrorText>{message}</ErrorText>
                                )}
                            />
                        </Input>
                        <Input
                            id="hiringDate"
                            labelText="Data de contratação"
                            placeholder="dd/mm/aaaa"
                            type="text"
                            register={register("hiringDate", {
                                required: "Digite a data de contratação",
                                validate: validateDataInput
                            })}
                            onChange={async (e: any) => {
                                let inputData: string = e.target.value.replace(
                                    /[^0-9/]/g,
                                    ""
                                );

                                if (e.nativeEvent.data === "/") {
                                    inputData = inputData.replace(/\/$/, "");
                                    setValue("hiringDate", inputData);
                                    return;
                                }

                                const hasError = await trigger("hiringDate");

                                if (!hasError) {
                                    clearErrors("hiringDate");
                                }

                                if (
                                    e.nativeEvent.inputType !==
                                        "deleteContentBackward" &&
                                    e.nativeEvent.inputType !==
                                        "deleteContentForward" &&
                                    (inputData.length === 2 ||
                                        inputData.length === 5)
                                ) {
                                    inputData += "/";
                                }

                                setValue("hiringDate", inputData);
                            }}
                            maxLength={10}
                        >
                            <ErrorMessage
                                errors={errors}
                                name="hiringDate"
                                render={({ message }) => (
                                    <ErrorText>{message}</ErrorText>
                                )}
                            />
                        </Input>
                    </>
                ) : null}
                <ButtonBox>
                    <OutlinedButton type="submit">
                        {page !== "login" ? "Cadastrar" : "Login"}
                    </OutlinedButton>
                    {error?.message ? (
                        <ErrorText>{error.message}</ErrorText>
                    ) : null}
                </ButtonBox>
            </Form>

            <TopLeftBox />
            <TopRightBox />
            <BottomLeftBox />
            <BottomRightBox />
        </Container>
    );
};

export default LrForm;
