import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}