import {
    IDataSource,
    IBarberResgistry,
    ISchedule,
    ICancelSchedule,
    IListSchedule
} from "./types";
import { checkScheduleTime } from "./helpers";
import { ValidationError } from "apollo-server";

const resolvers = {
    Query: {
        login: async (
            _: any,
            userObject: any,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.clientController.loginUser(
                userObject
            );
            return data;
        },
        listSchedules: async (
            _: any,
            { clientId }: IListSchedule,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.scheduleController.listSchedules(
                clientId
            );
            return data;
        }
    },
    Mutation: {
        registerClient: async (
            _: any,
            userObject: any,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.clientController.registerUser(
                userObject
            );
            return data;
        },
        registerAdmUser: async (
            _: any,
            userObject: any,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.clientController.registerAdmUser(
                userObject
            );
            return data;
        },
        registerSpeciality: async (
            _: any,
            { speciality }: any,
            { dataSources }: IDataSource
        ) => {
            const data =
                await dataSources.specialityController.registerSpeciality(
                    speciality
                );
            return data;
        },
        registerBarber: async (
            _: any,
            barberObject: IBarberResgistry,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.barberController.registerBarber(
                barberObject
            );
            return data;
        },
        createSchedule: async (
            _: any,
            scheduleObject: ISchedule,
            { dataSources }: IDataSource
        ) => {
            if (checkScheduleTime(scheduleObject.scheduledHour)) {
                const data =
                    await dataSources.scheduleController.createSchedule(
                        scheduleObject
                    );
                return data;
            }

            throw new ValidationError(
                "Agendamento fora do horário de funcionamento"
            );
        },
        cancelSchedule: async (
            _: any,
            cancelScheduleObject: ICancelSchedule,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.scheduleController.cancelSchedule(
                cancelScheduleObject
            );
            return data;
        }
    }
};

export default resolvers;
