import React, { createContext, useContext } from "react";
import {
    useForm,
    UseFormRegister,
    UseFormHandleSubmit,
    FieldValues
} from "react-hook-form";

interface ILrForm {
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
}

const LrPagesContext = createContext({} as ILrForm);

export const LrFormProvider: React.FC = ({ children }) => {
    const { register, handleSubmit } = useForm();

    return (
        <LrPagesContext.Provider value={{ register, handleSubmit }}>
            {children}
        </LrPagesContext.Provider>
    );
};

export const useLrForm = () => {
    const context = useContext(LrPagesContext);
    return context;
};
