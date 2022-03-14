import { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputContainer, Label } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
    labelText: string;
    register: UseFormRegisterReturn;
}

const Input: FC<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
        IInput
> = ({ labelText, id, register, ...props }) => {
    return (
        <InputContainer>
            <Label htmlFor={id}>{labelText}</Label>
            <input id={id} {...props} {...register} />
        </InputContainer>
    );
};

export default Input;
