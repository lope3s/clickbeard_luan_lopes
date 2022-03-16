export interface IUser {
    isAdmin: boolean;
    token: string;
    name: string;
}

export interface ILocalStorageData {
    token: string;
    name: string;
}

export interface ISpeciality {
    barbers: {
        name: string;
        age: number;
        __typename: string;
    }[];
    id: string;
    speciality: string;
    __typename: string;
}

export interface IFormData {
    name: string;
    age: string;
    hiringDate: string;
    speciality: ISpeciality[];
}
