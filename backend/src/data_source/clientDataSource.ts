import { Client } from "../entity";
import { DataSource } from "apollo-datasource";
import { getConnection } from "typeorm";
import { hashData, encryptData } from "../helpers";
import { UserInputError, ValidationError } from "apollo-server";

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
            client.isAdmin = false;

            const { password, ...rest } = await connection.save(client);
            rest.id = await encryptData(rest.id);

            return rest;
        } catch (error) {
            throw new ValidationError("E-mail já cadastrado");
        }
    }

    async registerAdmUser(userObject: IUserObject) {
        try {
            const connection = getConnection().getRepository(Client);

            const client = new Client();

            client.email = userObject.email;
            client.name = userObject.name;
            client.password = hashData(userObject.password);
            client.isAdmin = true;

            const { password, ...rest } = await connection.save(client);
            rest.id = await encryptData(rest.id);

            return rest;
        } catch (error) {
            throw new ValidationError("E-mail já cadastrado");
        }
    }

    async loginUser(userObject: IUserObject) {
        try {
            const connection = getConnection().getRepository(Client);

            const hashedPass = hashData(userObject.password);

            const dbSearch = await connection.findOneOrFail({
                email: userObject.email,
                password: hashedPass
            });

            dbSearch.id = await encryptData(dbSearch.id.toString());

            return dbSearch;
        } catch (error: any) {
            throw new UserInputError("E-mail ou senha inválidos");
        }
    }
}
