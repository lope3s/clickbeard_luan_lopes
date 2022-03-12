import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedules {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    barberName: string

    @Column()
	clientName: string

    @Column()
	scheduledHour: string
}