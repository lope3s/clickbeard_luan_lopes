import React from "react";
import { Box } from "./styles";

interface ITitleBox {
    centralizeText?: boolean;
}

const TitleBox: React.FC<ITitleBox> = ({ children, centralizeText }) => {
    return <Box center={centralizeText ? true : false}>{children}</Box>;
};

export default TitleBox;
