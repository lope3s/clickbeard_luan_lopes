import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { ButtonElement } from "./styles";

const OutlinedButton: FC<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({ children, ...props }) => {
    return (
        <ButtonElement>
            <button {...props}>{children}</button>
        </ButtonElement>
    );
};

export default OutlinedButton;
