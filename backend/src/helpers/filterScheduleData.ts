import { Schedules } from "../entity";

const filterScheduleData = (schedules: Schedules[]) => {
    return schedules.map((schedule) => {
        return {
            scheduledHour: schedule.scheduledHour,
            barberName: schedule.barber.name,
            clientName: schedule.client.name
        };
    });
};

export default filterScheduleData;
