import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;
}
