import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LrForm from "..";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache()
});

it("renders regitser page", () => {
    const postForm = jest.fn();

    const { getByLabelText, getByText } = render(
        <LrForm page="cadastro" postForm={postForm} />
    );

    const formTitle = getByText("Cadastro");
    const nameInput = getByLabelText("Nome");
    const emailInput = getByLabelText("E-mail");
    const passwordInput = getByLabelText("Senha");
    const submitButton = getByText("Cadastrar");

    expect(formTitle).toBeVisible();
    expect(nameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(submitButton).toBeVisible();
});

it("renders login page", () => {
    const postForm = jest.fn();

    const { getByLabelText, getByRole } = render(
        <LrForm page="login" postForm={postForm} />
    );

    const formTitle = getByRole("heading");
    const emailInput = getByLabelText("E-mail");
    const passwordInput = getByLabelText("Senha");
    const submitButton = getByRole("button");

    expect(formTitle).toHaveTextContent("Login");
    expect(formTitle).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(submitButton).toHaveTextContent("Login");
    expect(submitButton).toBeVisible();
});

it("renders registerBarber page", () => {
    const postForm = jest.fn();

    const { getByLabelText, getByText, getByRole } = render(
        <ApolloProvider client={client}>
            <LrForm page="registerBarber" postForm={postForm} />
        </ApolloProvider>
    );

    const formTitle = getByText("Registrar Barbeiro");
    const nameInput = getByLabelText("Nome");
    const specialityInput = getByLabelText("Especialidade");
    const ageInput = getByLabelText("Idade");
    const hiringDateInput = getByLabelText("Data de contratação");
    const submitButton = getByText("Cadastrar");

    expect(formTitle).toBeVisible();
    expect(nameInput).toBeVisible();
    expect(specialityInput).toBeVisible();
    expect(ageInput).toBeVisible();
    expect(hiringDateInput).toBeVisible();
    expect(submitButton).toBeVisible();
});

it("receives the correct data from register form", async () => {
    const user = userEvent.setup();
    const postForm = jest.fn();

    const { getByLabelText, getByText } = render(
        <LrForm page="cadastro" postForm={postForm} />
    );

    const nameInput = getByLabelText("Nome");

    await user.click(nameInput);
    await user.keyboard("Lopes");

    const emailInput = getByLabelText("E-mail");

    await user.click(emailInput);
    await user.keyboard("lopes@mail.com");

    const passwordInput = getByLabelText("Senha");

    await user.click(passwordInput);
    await user.keyboard("1234");

    const submitButton = getByText("Cadastrar");

    await user.click(submitButton);

    expect(postForm).toBeCalledTimes(1);

    expect(postForm).toHaveBeenCalledWith(
        {
            name: "Lopes",
            email: "lopes@mail.com",
            password: "1234"
        },
        expect.objectContaining({ _reactName: "onSubmit" })
    );
});

it("receives the correct data from login form", async () => {
    const user = userEvent.setup();
    const postForm = jest.fn();

    const { getByLabelText, getByRole } = render(
        <LrForm page="login" postForm={postForm} />
    );

    const emailInput = getByLabelText("E-mail");

    await user.click(emailInput);
    await user.keyboard("lopes@mail.com");

    const passwordInput = getByLabelText("Senha");

    await user.click(passwordInput);
    await user.keyboard("1234");

    const submitButton = getByRole("button");

    await user.click(submitButton);

    expect(postForm).toBeCalledTimes(1);

    expect(postForm).toHaveBeenCalledWith(
        {
            email: "lopes@mail.com",
            password: "1234"
        },
        expect.objectContaining({ _reactName: "onSubmit" })
    );
});
