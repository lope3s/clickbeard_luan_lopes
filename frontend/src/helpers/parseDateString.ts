const parseDateString = (date: string, option: Intl.DateTimeFormatOptions) => {
    const parsedDate = new Intl.DateTimeFormat("pt-br", option);

    return parsedDate
        .format(new Date(date))
        .toLocaleUpperCase()
        .replace(/\./, "");
};
export default parseDateString;
