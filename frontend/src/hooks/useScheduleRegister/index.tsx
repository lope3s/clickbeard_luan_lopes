import React, { createContext, useContext, useState } from "react";

interface IScheduleRegister {
    barberId: string;
    scheduledHour: string;
}

interface IExtraData {
    barberName: string;
    speciality: string;
}

interface IScheduleRegisterContext {
    scheduleRegistryData: IScheduleRegister;
    setScheduleRegistryData: React.Dispatch<
        React.SetStateAction<IScheduleRegister>
    >;
    extraData: IExtraData;
    setExtraData: React.Dispatch<React.SetStateAction<IExtraData>>;
}

const ScheduleResgisterContext = createContext({} as IScheduleRegisterContext);

export const ScheduleContext: React.FC = ({ children }) => {
    const [scheduleRegistryData, setScheduleRegistryData] =
        useState<IScheduleRegister>({
            barberId: "",
            scheduledHour: ""
        });
    const [extraData, setExtraData] = useState<IExtraData>({
        barberName: "",
        speciality: ""
    });

    return (
        <ScheduleResgisterContext.Provider
            value={{
                scheduleRegistryData,
                setScheduleRegistryData,
                extraData,
                setExtraData
            }}
        >
            {children}
        </ScheduleResgisterContext.Provider>
    );
};

export const useScheduleRegister = () => {
    const context = useContext(ScheduleResgisterContext);
    return context;
};
