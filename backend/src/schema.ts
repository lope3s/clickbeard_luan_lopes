import { gql } from "apollo-server";

const typeDefs = gql`
    type RegisteredClient {
        id: String
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
        barberName: String
        scheduledHour: String
    }

    type Query {
        login(email: String!, password: String!): RegisteredClient
    }

    type Mutation {
        registerClient(name: String!, email: String!, password: String!): RegisteredClient
        registerAdmUser(name: String!, email: String!, password: String!): RegisteredClient
        registerSpeciality(speciality: String!): Speciality
        registerBarber(name: String!, age: Int!, hiringDate: String!, specialities: [String]!): Barbers
        createSchedule(clientId: String!, barberId: String!, scheduledHour: String!): Schedule
    }
`;

export default typeDefs;
