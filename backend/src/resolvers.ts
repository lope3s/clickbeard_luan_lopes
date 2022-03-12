const client = [
    {
        name: "Lopes",
        email: "mlopes.works@gmail.com",
        password: "123456",
        fiends: ["diego", "eliabe", "gustavo"]
    }
];

const resolvers = {
    Query: {
        client: () => client
    },
    Mutation: {
        registerClient: async (
            _: any,
            userObject: any,
            { dataSources }: any
        ) => {
            const data = await dataSources.clientAPI.registerUser(userObject);
            return data;
        }
    }
};

export default resolvers;
