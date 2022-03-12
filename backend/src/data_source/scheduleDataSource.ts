import { DataSource } from "apollo-datasource";
import { Schedules, Client, Barbers } from "../entity";
import { ISchedule } from "../types";
import { getConnection } from "typeorm";

export class ScheduleDataSource extends DataSource {
    async createSchedule (scheduleObject: ISchedule) {
        try {
            const connection = getConnection();

            const partsIds = await Promise.all([
                connection.manager.findOneOrFail(Client, scheduleObject.clientId), 
                connection.manager.findOneOrFail(Barbers, scheduleObject.barberId)
            ])

            // Validate if scheduled hour is between the start time and end time, if true, throw a validation error

            const newSchedule = new Schedules();
            newSchedule.barberName = partsIds[1].name
            newSchedule.clientName = partsIds[0].name
            newSchedule.scheduledHour = scheduleObject.scheduledHour

            return await connection.manager.save(newSchedule)

        } catch (error: any) {
            console.log({error})
            throw new Error(error.message)
        }
    }
}