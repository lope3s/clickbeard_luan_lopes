import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { OptionButtonElement } from "./styles";

const OptionButton: FC<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({ children, ...props }) => {
    return (
        <OptionButtonElement>
            <button {...props}>{children}</button>
        </OptionButtonElement>
    );
};

export default OptionButton;
