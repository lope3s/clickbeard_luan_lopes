import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { join } from "path";
import { config } from "dotenv";
config({ path: join(__dirname, "../env") });
import { ClientDataSource } from "./data_source";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            clientAPI: new ClientDataSource()
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
