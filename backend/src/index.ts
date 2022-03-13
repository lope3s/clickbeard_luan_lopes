import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { join } from "path";
import { config } from "dotenv";
import {
    ClientDataSource,
    SpecialityDataSource,
    BarberDataSource,
    ScheduleDataSource
} from "./data_source";
import startKeyStore from "./services/startKeyStore";
config({ path: join(__dirname, "../env") });
import { decryptData } from "./helpers";

startKeyStore();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            clientController: new ClientDataSource(),
            specialityController: new SpecialityDataSource(),
            barberController: new BarberDataSource(),
            scheduleController: new ScheduleDataSource()
        };
    },
    context: async ({ req }) => {
        const token = req.headers.authorization || "";

        if (token) {
            const clientId = await decryptData(token);

            return { clientId };
        }

        return { clientId: null };
    }
});

server.listen().then(async ({ url }) => {
    try {
        await createConnection();
        console.log("db connected!");
        console.log(`Server started ad ${url}`);
    } catch (error) {
        console.log(error);
    }
});
