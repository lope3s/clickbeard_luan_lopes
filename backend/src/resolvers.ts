import {
    IDataSource,
    IBarberResgistry,
    ISchedule,
    ICancelSchedule,
    IListSchedule
} from "./types";
import { checkScheduleTime } from "./helpers";
import { ValidationError, AuthenticationError } from "apollo-server";

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
            __: any,
            { dataSources, clientId }: IDataSource
        ) => {
            if (!clientId) {
                throw new AuthenticationError("Nenhum token fornecido");
            }

            const data = await dataSources.scheduleController.listSchedules(
                clientId
            );
            return data;
        },
        checkToken: async (
            _: any,
            __: any,
            { dataSources, clientId }: IDataSource
        ) => {
            if (!clientId) {
                throw new AuthenticationError("Nenhum token fornecido");
            }

            const data = await dataSources.clientController.checkToken(
                clientId
            );
            return data;
        },
        listSpecialities: async (
            _: any,
            __: any,
            { dataSources }: IDataSource
        ) => {
            const data =
                await dataSources.specialityController.listSpecialities();

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
            { dataSources, clientId }: IDataSource
        ) => {
            if (!clientId) {
                throw new AuthenticationError("Nenhum token fornecido");
            }

            const data =
                await dataSources.specialityController.registerSpeciality(
                    speciality,
                    clientId
                );
            return data;
        },
        registerBarber: async (
            _: any,
            barberObject: IBarberResgistry,
            { dataSources, clientId }: IDataSource
        ) => {
            if (!clientId) {
                throw new AuthenticationError("Nenhum token fornecido");
            }

            const data = await dataSources.barberController.registerBarber(
                barberObject,
                clientId
            );
            return data;
        },
        createSchedule: async (
            _: any,
            scheduleObject: ISchedule,
            { dataSources, clientId }: IDataSource
        ) => {
            if (!clientId) {
                throw new AuthenticationError("Nenhum token fornecido");
            }

            if (checkScheduleTime(scheduleObject.scheduledHour)) {
                const data =
                    await dataSources.scheduleController.createSchedule(
                        scheduleObject,
                        clientId
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
            { dataSources, clientId }: IDataSource
        ) => {
            if (!clientId) {
                throw new AuthenticationError("Nenhum token fornecido");
            }

            const data = await dataSources.scheduleController.cancelSchedule(
                cancelScheduleObject,
                clientId
            );
            return data;
        }
    }
};

export default resolvers;
