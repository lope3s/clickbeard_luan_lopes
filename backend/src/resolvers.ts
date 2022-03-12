import { IDataSource, IBarberResgistry, ISchedule } from "./types";

const resolvers = {
    Query: {
        login: async (_: any, userObject: any, { dataSources }: IDataSource) => {
            const data = await dataSources.clientController.loginUser(userObject);
            return data;
        }
    },
    Mutation: {
        registerClient: async (
            _: any,
            userObject: any,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.clientController.registerUser(userObject);
            return data;
        },
        registerAdmUser: async (
            _: any,
            userObject: any,
            { dataSources }: IDataSource
        ) => {
            const data = await dataSources.clientController.registerAdmUser(userObject);
            return data;
        },
        registerSpeciality: async (_: any, {speciality}: any, {dataSources}: IDataSource) => {

            const data = await dataSources.specialityController.registerSpeciality(speciality)
            return data;
        },
        registerBarber: async (_: any, barberObject: IBarberResgistry, {dataSources}: IDataSource) => {
            const data = await dataSources.barberController.registerBarber(barberObject)
            return data;
        },
        createSchedule: async(_: any, scheduleObject: ISchedule, {dataSources}: IDataSource) => {
            const data = await dataSources.scheduleController.createSchedule(scheduleObject)
            return data;
        }

    }
};

export default resolvers;
