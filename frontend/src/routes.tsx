import React from "react";
import { Header } from "./components";
import { LandingPage, RegisterPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { LrFormProvider } from "./hooks/useLrForm";
import "./global.css";

const Router: React.FC = () => {
    return (
        <LrFormProvider>
            <Header>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                </Routes>
            </Header>
        </LrFormProvider>
    );
};

export default Router;
