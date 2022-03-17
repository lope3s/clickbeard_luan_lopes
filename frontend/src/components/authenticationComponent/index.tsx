import React from "react";
import { IModel, IUser } from "../../types";
import { useStoreState } from "easy-peasy";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticationComponent: React.FC = ({ children }) => {
    const { token } = useStoreState<IModel, IUser>(
        (states) => states.userModel
    );

    const { pathname } = useLocation();

    if (
        !token &&
        pathname !== "/" &&
        pathname !== "/cadastro" &&
        pathname !== "/login"
    ) {
        return <Navigate to="/" replace={true} />;
    }
    if (
        token &&
        (pathname === "/" || pathname === "/cadastro" || pathname === "/login")
    ) {
        return <Navigate to="/agendamentos" replace={true} />;
    }

    return <>{children}</>;
};

export default AuthenticationComponent;
