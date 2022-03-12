export interface IBarberResgistry {
    age: number
    hiringDate: string
    name: string
    specialities: string[]
}

export interface ISchedule {
    clientId: string
    barberId: string
    scheduledHour: string
}