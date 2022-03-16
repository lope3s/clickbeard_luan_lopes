import React, { useEffect } from "react";
import { ILocalStorageData, IModel, ICheckTokenData } from "../../types";
import { useLazyQuery } from "@apollo/client";
import { CHECK_TOKEN } from "../../gqlQueries";
import { LoadingComponent } from "../";
import { useStoreActions } from "easy-peasy";

const RehidrateComponent: React.FC = ({ children }) => {
    const [checkData, { loading, data, error }] =
        useLazyQuery<ICheckTokenData>(CHECK_TOKEN);

    const setUser = useStoreActions<IModel>(
        (actions) => actions.userModel.setUser
    );

    useEffect(() => {
        checkData();
    }, [checkData]);

    if (data?.checkToken) {
        const { isAdmin, name } = data.checkToken;
        const { token }: ILocalStorageData = JSON.parse(
            localStorage.getItem("@clickbeard")!
        );
        setUser({ token, isAdmin, name });
    }

    if (error) {
        console.log({ error });
    }

    return (
        <>
            {loading ? <LoadingComponent /> : null}
            {(data || error) && children}
        </>
    );
};

export default RehidrateComponent;
