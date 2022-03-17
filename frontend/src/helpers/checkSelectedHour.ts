const checkSelectedHour = (availableTimeList: string, testingTime: Date) => {
    const splitedTimeList = availableTimeList.split(", ");

    for (let time of splitedTimeList) {
        // se a string não possui -, então o testingTime precisa ser igual ao tempo em questão
        if (!time.includes("-")) {
            const splitedTime = time.split(":");

            const processingTime = new Date(testingTime);
            processingTime.setHours(
                parseInt(splitedTime[0]),
                parseInt(splitedTime[1]),
                0,
                0
            );

            if (processingTime.toString() === testingTime.toString()) {
                return true;
            }

            continue;
        }

        // se a string não possui -, então o testingTime precisa estar entre os dois tempos

        const splitedTimes = time.split(" - ");

        const baseTime = splitedTimes[0].split(":");
        const limitTime = splitedTimes[1].split(":");

        const processingBaseTime = new Date(testingTime);
        processingBaseTime.setHours(
            parseInt(baseTime[0]),
            parseInt(baseTime[1]),
            0,
            0
        );

        const processingLimitTime = new Date(testingTime);
        processingLimitTime.setHours(
            parseInt(limitTime[0]),
            parseInt(limitTime[1]),
            0,
            0
        );

        if (
            testingTime >= processingBaseTime &&
            testingTime <= processingLimitTime
        ) {
            return true;
        }
    }

    return false;
};

export default checkSelectedHour;
