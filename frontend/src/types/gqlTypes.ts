import { ISchedule } from "./genericTypes";

export interface IRegisterData {
    registerClient: {
        name: string;
        token: string;
        isAdmin: boolean;
        __typename: string;
    };
}

export interface ILoginData {
    login: {
        name: string;
        token: string;
        isAdmin: boolean;
        __typename: string;
    };
}

export interface ICheckTokenData {
    checkToken: {
        __typename: string;
        isAdmin: boolean;
        name: string;
    };
}

export interface IListSpecialityData {
    listSpecialities: {
        barbers: {
            name: string;
            age: number;
            id: string;
            __typename: string;
        }[];
        id: string;
        speciality: string;
        __typename: string;
    }[];
}

export interface ISpecialityData {
    registerSpeciality: {
        speciality: string;
    };
}

export interface IRegisterBarber {
    registerBarber: {
        __typename: string;
        name: string;
    };
}

export interface IGetBarberFreeTime {
    getBarberFreeTime: {
        __typename: string;
        scheduledHour: string;
    }[];
}

export interface ICreateSchedule {
    createSchedule: {
        __typename: string;
        barberName: string;
        scheduledHour: string;
    };
}

export interface IListSchedules {
    listSchedules: ISchedule[];
}

export interface ICancelSchedule {
    cancelSchedule: string;
}
