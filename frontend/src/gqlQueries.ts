import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!) {
        registerClient(name: $name, email: $email, password: $password) {
            token
            name
            isAdmin
        }
    }
`;

export const LOGIN_USER = gql`
    query LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            isAdmin
            name
            token
        }
    }
`;

export const CHECK_TOKEN = gql`
    query CheckToken {
        checkToken {
            name
            isAdmin
        }
    }
`;

export const LIST_SCHEDULES = gql`
    query ListSchedules {
        listSchedules {
            barberName
            clientName
            scheduledHour
            id
        }
    }
`;

export const LIST_SPECIALITIES = gql`
    query ListSpecialities {
        listSpecialities {
            id
            speciality
            barbers {
                name
                age
                id
            }
        }
    }
`;

export const REGISTER_SPECIALITY = gql`
    mutation registerSpeciality($speciality: String!) {
        registerSpeciality(speciality: $speciality) {
            speciality
        }
    }
`;

export const REGISTER_BARBER = gql`
    mutation RegisterBarber(
        $name: String!
        $age: Int!
        $hiringDate: String!
        $specialities: [String]!
    ) {
        registerBarber(
            name: $name
            age: $age
            hiringDate: $hiringDate
            specialities: $specialities
        ) {
            name
        }
    }
`;

export const GET_BARBER_FREE_TIME = gql`
    query GetBarberFreeTime($barberId: String!, $date: String!) {
        getBarberFreeTime(barberId: $barberId, date: $date) {
            scheduledHour
        }
    }
`;

export const CREATE_SCHEDULE = gql`
    mutation CreateSchedule($barberId: String!, $scheduledHour: String!) {
        createSchedule(barberId: $barberId, scheduledHour: $scheduledHour) {
            barberName
            scheduledHour
        }
    }
`;

export const CANCEL_SCHEDULE = gql`
    mutation Mutation($scheduleId: String!) {
        cancelSchedule(scheduleId: $scheduleId)
    }
`;
