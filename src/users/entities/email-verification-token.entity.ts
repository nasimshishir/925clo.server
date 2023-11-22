import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";

@Entity()
export class EmailToken {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    token: string

    @OneToOne(() => Users, user => user.emailToken)
    user: Users
}