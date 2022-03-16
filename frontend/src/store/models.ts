import { IModel, IUserModel } from "../types";
import { action } from "easy-peasy";

const userModel: IUserModel = {
    isAdmin: false,
    token: "",
    name: "",
    setUser: action((state, payload) => {
        state.isAdmin = payload.isAdmin;
        state.name = payload.name;
        state.token = payload.token;
    })
};

const Model: IModel = {
    userModel
};

export default Model;
