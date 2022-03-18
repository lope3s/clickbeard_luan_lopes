import React from "react";
import { Container, TitleContainer, SchedulesContainer } from "./style";
import {
    TitleBox,
    H1,
    LoadingComponent,
    ScheduleComponent,
    ErrorInformModal
} from "../../components";
import { useQuery } from "@apollo/client";
import { LIST_SCHEDULES } from "../../gqlQueries";
import { IListSchedules, IModel, IUser } from "../../types";
import { useStoreState } from "easy-peasy";

const SchedulesPage: React.FC = () => {
    const { token } = useStoreState<IModel, IUser>((state) => state.userModel);

    const { loading, data, error, refetch } = useQuery<IListSchedules>(
        LIST_SCHEDULES,
        { variables: { clientId: token } }
    );

    return (
        <Container>
            {loading ? <LoadingComponent /> : null}
            {error ? <ErrorInformModal error={error.message} /> : null}
            <TitleContainer>
                <TitleBox>
                    <H1>Horários marcados</H1>
                </TitleBox>
            </TitleContainer>
            <SchedulesContainer>
                {data?.listSchedules.length
                    ? React.Children.toArray(
                          data.listSchedules.map((schedule) => (
                              <ScheduleComponent
                                  cardData={schedule}
                                  refetchCb={refetch}
                              />
                          ))
                      )
                    : null}
            </SchedulesContainer>
        </Container>
    );
};

export default SchedulesPage;
