import { render } from "@testing-library/react";
import SelectBarber from "../";
import userEvent from "@testing-library/user-event";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache()
});

it("renders the selectBarber component", async () => {
    let counter = 0;

    const setCouter = jest.fn();

    const { getByText } = render(
        <ApolloProvider client={client}>
            <SelectBarber counter={counter} setCounter={setCouter} />
        </ApolloProvider>
    );

    const selectSpecialityTitle = getByText("Selecione a especialidade");
    const emptyMessageDisplayed = getByText("Nenhum Barbeiro encontrado");

    expect(selectSpecialityTitle).toBeVisible();
    expect(emptyMessageDisplayed).toBeVisible();
});
