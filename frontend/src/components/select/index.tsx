import {
    FC,
    DetailedHTMLProps,
    InputHTMLAttributes,
    useState,
    Children
} from "react";
import {
    Container,
    Label,
    OptionsBox,
    AddNewSpeciality,
    OptionsBoxFooter,
    OptionsBody,
    Option,
    InputDataBox,
    SelectedOptionBox,
    SelectedOption,
    SvgBox
} from "./styles";
import {
    UseFormRegisterReturn,
    UseFormClearErrors,
    UseFormGetValues,
    UseFormSetValue,
    FieldValues
} from "react-hook-form";
import { BiDownArrow } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { useQuery } from "@apollo/client";
import { LIST_SPECIALITIES } from "../../gqlQueries";
import { IListSpecialityData, ISpeciality } from "../../types";
import {
    RegisterSpecialityModal,
    LoadingComponent,
    ErrorInformModal
} from "../";

interface ISelect {
    labelText: string;
    register?: UseFormRegisterReturn;
    getValues: UseFormGetValues<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    clearErrors: UseFormClearErrors<FieldValues>;
}

const Select: FC<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
        ISelect
> = ({
    labelText,
    id,
    register,
    getValues,
    setValue,
    clearErrors,
    children
}) => {
    const { loading, error, data, refetch } =
        useQuery<IListSpecialityData>(LIST_SPECIALITIES);

    const [showOptionsBox, setShowOptionsBox] = useState(false);
    const [inputData, setInputData] = useState<ISpeciality[]>([]);
    const [modalControll, setModalControll] = useState(false);

    const inputValue: string | ISpeciality[] = getValues("speciality");

    const removeSpeciality = (specialityId: string) => {
        if (typeof inputValue === "object") {
            const newInputData = inputValue.filter(
                (value) => value.id !== specialityId
            );

            setInputData(newInputData);
            setValue("speciality", newInputData);
            return;
        }
    };

    const addSpeciality = (speciality: ISpeciality) => {
        if (typeof inputValue === "object") {
            const isAlreadRegistered = inputValue.find(
                (value) => value.id === speciality.id
            );

            if (!isAlreadRegistered) {
                const data = [...inputValue, speciality];
                setValue("speciality", data);
                setInputData(data);
            }
        } else {
            setValue("speciality", [speciality]);
            setInputData([speciality]);
        }

        clearErrors("speciality");

        setShowOptionsBox(false);

        return;
    };

    return (
        <>
            {modalControll ? (
                <RegisterSpecialityModal
                    setModalControll={setModalControll}
                    refetch={refetch}
                />
            ) : null}
            {loading ? <LoadingComponent /> : null}
            {error ? <ErrorInformModal error={error.message} /> : null}
            <Container
                onClick={() => {
                    setShowOptionsBox(!showOptionsBox);
                }}
            >
                <Label htmlFor={id}>{labelText}</Label>
                <InputDataBox>
                    <SvgBox>
                        <BiDownArrow />
                    </SvgBox>
                    <input
                        placeholder={
                            inputData.length
                                ? ""
                                : "Selecione uma especialidade"
                        }
                        value={typeof inputValue === "object" ? "" : ""}
                        readOnly
                        {...register}
                    />
                    <SelectedOptionBox>
                        {typeof inputValue === "object" && inputValue.length
                            ? Children.toArray(
                                  inputValue.map((value) => (
                                      <SelectedOption>
                                          <p>{value.speciality}</p>
                                          <GrFormClose
                                              onClick={(e) => {
                                                  e.stopPropagation();
                                                  removeSpeciality(value.id);
                                              }}
                                          />
                                      </SelectedOption>
                                  ))
                              )
                            : null}
                    </SelectedOptionBox>
                </InputDataBox>
                {showOptionsBox ? (
                    <OptionsBox onClick={(e) => e.stopPropagation()}>
                        {data?.listSpecialities.length ? (
                            <OptionsBody>
                                {Children.toArray(
                                    data.listSpecialities.map((value) => (
                                        <Option
                                            onClick={() => {
                                                addSpeciality(value);
                                            }}
                                        >
                                            <p>{value.speciality}</p>
                                        </Option>
                                    ))
                                )}
                            </OptionsBody>
                        ) : null}
                        <OptionsBoxFooter>
                            <AddNewSpeciality
                                onClick={() => setModalControll(true)}
                            >
                                <IoIosAddCircle />
                                <p>Adicionar especialidade</p>
                            </AddNewSpeciality>
                        </OptionsBoxFooter>
                    </OptionsBox>
                ) : null}
                {children}
            </Container>
        </>
    );
};

export default Select;
