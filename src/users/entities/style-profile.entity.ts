import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";

@Entity()
export class StyleProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Users, user => user.styleProfile)
    @JoinColumn()
    user: Users;

    @Column({ nullable: true })
    location: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    brands: string;

    @Column({ nullable: true })
    age: string;

    @Column({ nullable: true })
    color: string;

    @Column({ nullable: true })
    sizeTop: string;

    @Column({ nullable: true })
    sizeBottom: string;

    @Column({ nullable: true })
    sizeFootwear: string;

    @Column({ nullable: true })
    occassion: string;
}