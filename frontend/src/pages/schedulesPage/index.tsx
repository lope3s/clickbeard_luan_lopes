import React from "react";
import { Container, TitleContainer } from "./style";
import { TitleBox, H1, LoadingComponent } from "../../components";
import { useQuery } from "@apollo/client";
import { LIST_SCHEDULES } from "../../gqlQueries";

const SchedulesPage: React.FC = () => {
    const { loading, data } = useQuery(LIST_SCHEDULES);

    if (data) {
        console.log(data);
    }

    return (
        <Container>
            {loading ? <LoadingComponent /> : null}
            <TitleContainer>
                <TitleBox>
                    <H1>Horários marcados</H1>
                </TitleBox>
            </TitleContainer>
        </Container>
    );
};

export default SchedulesPage;
