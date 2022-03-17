import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { OptionButtonElement } from "./styles";

interface IOptionButton {
    selectedValue: number;
}

const OptionButton: FC<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > &
        IOptionButton
> = ({ children, id, selectedValue, ...props }) => {
    return (
        <OptionButtonElement isSelected={parseInt(id!) === selectedValue}>
            <button {...props}>{children}</button>
        </OptionButtonElement>
    );
};

export default OptionButton;
