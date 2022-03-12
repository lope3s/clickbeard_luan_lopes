import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import { Specialties } from './'

@Entity()
export class Barbers {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    hiringDate: string

    @ManyToMany(type => Specialties, specialites => specialites.barbers )
    @JoinTable()
    specialties: Specialties[]
}