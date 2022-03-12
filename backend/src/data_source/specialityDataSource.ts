import { DataSource } from "apollo-datasource";
import { getConnection } from "typeorm";
import { Specialties } from '../entity'

export class SpecialityDataSource extends DataSource {
    async registerSpeciality (speciality: string) {
        try {
            const connection = getConnection().getRepository(Specialties);

            const newSpeciality = new Specialties()
            newSpeciality.speciality = speciality

            const specialityCreated = await connection.save(newSpeciality)

            return specialityCreated

        } catch (error) {
            console.log(error)
            throw new Error("erro")
        }
    }
}