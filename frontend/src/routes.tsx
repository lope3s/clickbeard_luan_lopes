import React from "react";
import {
    Header,
    AuthenticationComponent,
    RehidrateComponent
} from "./components";
import {
    LandingPage,
    RegisterPage,
    LoginPage,
    SchedulesPage,
    RegisterBarberPage
} from "./pages";
import { Routes, Route } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import store from "./store/store";
import { StoreProvider } from "easy-peasy";
import { ILocalStorageData } from "./types";
import "./global.css";

const httpLink = createHttpLink({
    uri: "http://localhost:4000"
});

const authLink = setContext((_, { headers }) => {
    const localStor = localStorage.getItem("@clickbeard")!;

    const localStorageData: ILocalStorageData = localStor
        ? JSON.parse(localStor)
        : "";

    return {
        headers: {
            ...headers,
            authorization: localStorageData ? localStorageData.token : ""
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const Router: React.FC = () => {
    return (
        <StoreProvider store={store}>
            <ApolloProvider client={client}>
                <RehidrateComponent>
                    <Header>
                        <AuthenticationComponent>
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route
                                    path="/cadastro"
                                    element={<RegisterPage />}
                                />
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                    path="/agendamentos"
                                    element={<SchedulesPage />}
                                />
                                <Route
                                    path="/registrarBarbeiro"
                                    element={<RegisterBarberPage />}
                                />
                            </Routes>
                        </AuthenticationComponent>
                    </Header>
                </RehidrateComponent>
            </ApolloProvider>
        </StoreProvider>
    );
};

export default Router;
