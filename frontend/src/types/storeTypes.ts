import { Action } from "easy-peasy";
import { IUser } from "./";

export interface IUserModel {
    isAdmin: boolean;
    token: string;
    name: string;
    setUser: Action<IUserModel, IUser>;
}

export interface IModel {
    userModel: IUserModel;
}
