import { parseDateString } from "../helpers";

interface ISchedule {
    __typename: string;
    scheduledHour: string;
}

const returnBarberFreeTime = (schedules: ISchedule[]) => {
    let timeList: string[] = ["08:00 -"];

    schedules.forEach((schedule) => {
        const newDate = new Date(schedule.scheduledHour);

        const previousAvailableTime = new Date(newDate);
        previousAvailableTime.setMinutes(
            previousAvailableTime.getMinutes() - 30,
            0,
            0
        );

        const nextAvailableTime = new Date(newDate);
        nextAvailableTime.setMinutes(nextAvailableTime.getMinutes() + 30, 0, 0);

        const options: Intl.DateTimeFormatOptions = {
            hour: "2-digit",
            minute: "2-digit"
        };

        let shoudAddPreviousAvailableTime = true;
        let shoudAddNextAvailableTime = true;

        // Verificando se o dado atual não cria conflito com o último dado inserido na lista
        if (timeList.length) {
            // tratando o último dado inserito para avaliação
            const lastAddedDataSplited = timeList[timeList.length - 1]
                .replace(/[^0-9:]/g, "")
                .split(":");

            const previousTime = new Date();

            previousTime.setHours(
                parseInt(lastAddedDataSplited[0]),
                parseInt(lastAddedDataSplited[1]),
                0,
                0
            );

            // utilizando o dado tratado para comparar com o tempo do contexto
            if (previousAvailableTime.getHours() >= 8) {
                const time = parseDateString(
                    previousAvailableTime.toString(),
                    options
                );

                const splitedTime = time.split(":");

                const processingTime = new Date();
                processingTime.setHours(
                    parseInt(splitedTime[0]),
                    parseInt(splitedTime[1])
                );

                if (previousTime > processingTime) {
                    shoudAddPreviousAvailableTime = false;
                }
            }

            // utilizando o dado tratado para comparar com o tempo do contexto
            if (nextAvailableTime.getHours() <= 18) {
                const time = parseDateString(
                    nextAvailableTime.toString(),
                    options
                );

                const splitedTime = time.split(":");

                const processingTime = new Date();
                processingTime.setHours(
                    parseInt(splitedTime[0]),
                    parseInt(splitedTime[1])
                );

                if (previousTime > processingTime) {
                    shoudAddNextAvailableTime = false;
                }
            }

            // por último verificamos se não adicionamos um horário marcado durante a projeção

            const filledTimeString = parseDateString(
                newDate.toString(),
                options
            );

            if (timeList.includes(`${filledTimeString},`)) {
                const itemIndex = timeList.indexOf(`${filledTimeString},`);
                timeList.splice(itemIndex, 1);
            }

            if (timeList.includes(`${filledTimeString} -`)) {
                const itemIndex = timeList.indexOf(`${filledTimeString} -`);
                timeList.splice(itemIndex, 1);
            }
        }

        // Adicionando dado para a lista
        if (
            previousAvailableTime.getHours() >= 8 &&
            shoudAddPreviousAvailableTime
        ) {
            const time = parseDateString(
                previousAvailableTime.toString(),
                options
            );

            // Verifica se o dado ja foi inserido na lista, e altera a marcação
            if (timeList.includes(`${time} -`)) {
                timeList[timeList.length - 1] = `${time},`;
            } else {
                timeList.push(`${time},`);
            }
        }

        // Adicionando dado para a lista
        if (
            nextAvailableTime.getHours() <= 18 &&
            shoudAddNextAvailableTime &&
            nextAvailableTime.toString() !== newDate.toString()
        ) {
            if (
                nextAvailableTime.getHours() === 18 &&
                nextAvailableTime.getMinutes() > 0
            ) {
                return;
            }

            const time = parseDateString(nextAvailableTime.toString(), options);

            if (!timeList.includes(`${time},`)) {
                timeList.push(`${time} -`);
            }
        }
    });

    if (timeList.length) {
        timeList[timeList.length - 1] = timeList[timeList.length - 1].replace(
            ",",
            ""
        );
        if (timeList[timeList.length - 1].includes("-")) {
            timeList.push("18:00");
        }
    }

    return timeList.join(" ");
};

export default returnBarberFreeTime;
