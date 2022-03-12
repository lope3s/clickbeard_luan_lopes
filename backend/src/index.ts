import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { join } from "path";
import { config } from "dotenv";
config({ path: join(__dirname, "../env") });
import { ClientDataSource, SpecialityDataSource, BarberDataSource, ScheduleDataSource } from "./data_source";

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
