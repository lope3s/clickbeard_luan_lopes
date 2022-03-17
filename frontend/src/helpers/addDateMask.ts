import {
    UseFormSetValue,
    UseFormClearErrors,
    UseFormTrigger,
    FieldValues
} from "react-hook-form";

const addDateMask = async (
    e: any,
    setValue: UseFormSetValue<FieldValues>,
    clearErrors: UseFormClearErrors<FieldValues>,
    trigger: UseFormTrigger<FieldValues>
) => {
    let inputData: string = e.target.value.replace(/[^0-9/]/g, "");

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
        e.nativeEvent.inputType !== "deleteContentBackward" &&
        e.nativeEvent.inputType !== "deleteContentForward" &&
        (inputData.length === 2 || inputData.length === 5)
    ) {
        inputData += "/";
    }

    setValue("hiringDate", inputData);
};

export default addDateMask;
