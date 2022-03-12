import { Client } from "../entity";
import { DataSource } from "apollo-datasource";
import { getConnection } from "typeorm";
import { hashData } from "../helpers";

interface IUserObject {
    email: string;
    name: string;
    password: string;
}

export class ClientDataSource extends DataSource {
    async registerUser(userObject: IUserObject) {
        try {
            const connection = getConnection().getRepository(Client);

            const client = new Client();

            client.email = userObject.email;
            client.name = userObject.name;
            client.password = hashData(userObject.password);

            const { password, ...rest } = await connection.save(client);

            return rest;
        } catch (error) {
            throw new Error("erro");
        }
    }
}
