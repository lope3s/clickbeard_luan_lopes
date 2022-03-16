const validateDataInput = (data: string) => {
    const today = new Date();
    const reorderedData = data.split("/").reverse().join("-");
    const convertedData = new Date(reorderedData);

    if (today < convertedData) {
        return "Não é possível utilizar uma data futura";
    }
    return true;
};

export default validateDataInput;
