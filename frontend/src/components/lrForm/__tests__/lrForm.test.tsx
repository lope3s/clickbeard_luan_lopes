import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LrForm from "..";

it("renders the page", () => {
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

it("receives the correct data from form", async () => {
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
