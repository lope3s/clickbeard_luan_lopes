const setDate = () => {
    const now = new Date();
    if (
        (now.getHours() === 18 && now.getMinutes() > 0) ||
        now.getHours() > 18
    ) {
        now.setDate(now.getDate() + 1);
        now.setHours(3, 0, 0, 0);
        return now;
    }

    return now;
};

export default setDate;
