import { gql } from "apollo-server";

const typeDefs = gql`
    type RegisteredClient {
        token: String
        name: String
        email: String
        isAdmin: Boolean
    }

    type Barbers {
        id: String
        name: String
        age: Int
        hiringDate: String
        specialties: [Speciality]
    }

    type Speciality {
        id: String
        speciality: String
        barbers: [Barbers]
    }

    type Schedule {
        clientName: String
        barberName: String
        scheduledHour: String
    }

    type Query {
        login(email: String!, password: String!): RegisteredClient
        listSchedules: [Schedule]
        checkToken: RegisteredClient
        listSpecialities: [Speciality]
    }

    type Mutation {
        registerClient(
            name: String!
            email: String!
            password: String!
        ): RegisteredClient

        registerAdmUser(
            name: String!
            email: String!
            password: String!
        ): RegisteredClient

        registerSpeciality(speciality: String!): Speciality

        registerBarber(
            name: String!
            age: Int!
            hiringDate: String!
            specialities: [String]!
        ): Barbers

        createSchedule(
            clientId: String!
            barberId: String!
            scheduledHour: String!
        ): Schedule

        cancelSchedule(clientId: String!, scheduleId: String!): String
    }
`;

export default typeDefs;
