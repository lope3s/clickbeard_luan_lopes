import { DataSource } from 'apollo-datasource';
import { getConnection } from 'typeorm';
import { Barbers, Specialties } from '../entity';
import { UserInputError } from 'apollo-server'
import { IBarberResgistry } from '../types';

export class BarberDataSource extends DataSource {
    async registerBarber(barberObject: IBarberResgistry) {
        try {
            const connection = getConnection()

            const speciality = await Promise.all(barberObject.specialities.map(async (id) => (
                connection.manager.findOneOrFail(Specialties, { id })
            )))

            const newBarber = new Barbers();
            newBarber.age = barberObject.age
            newBarber.hiringDate = barberObject.hiringDate
            newBarber.name = barberObject.name
            newBarber.specialties = speciality

            return await connection.manager.save(newBarber)
            
        } catch (error: any) {
            throw new UserInputError("Especialidade não encontrada")
        }
    }
}