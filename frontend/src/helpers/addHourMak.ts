import React from "react";

const addHourMask = (
    e: React.ChangeEvent<HTMLInputElement>,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    setInputError: React.Dispatch<React.SetStateAction<string>>
) => {
    const inputNativeEvent = e.nativeEvent as InputEvent;
    const test = /[^0-9]/g;

    if (inputNativeEvent.data && test.test(inputNativeEvent.data)) {
        return;
    }

    if (
        e.target.value.length === 2 &&
        inputNativeEvent.inputType !== "deleteContentBackward" &&
        inputNativeEvent.inputType !== "deleteContentForward"
    ) {
        e.target.value += ":";
    }

    setInputError("");
    setInputValue(e.target.value);
};

export default addHourMask;
