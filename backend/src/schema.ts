import { gql } from "apollo-server";

const typeDefs = gql`
    type Client {
        name: String
        email: String
        password: String
    }

    type RegistetedClient {
        name: String
        email: String
    }

    type Query {
        client: [Client]
    }

    type Mutation {
        registerClient(
            name: String
            email: String
            password: String
        ): RegistetedClient
    }
`;

export default typeDefs;
