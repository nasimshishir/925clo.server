import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StyleProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Users, user => user.styleProfile)
    @JoinColumn()
    user: Users

    @Column()
    location: string;

    @Column()
    gender: string;

    @Column()
    brands: string;

    @Column()
    age: string;

    @Column()
    color: string;

    @Column()
    sizeTop: string;

    @Column()
    sizeBottom: string;

    @Column()
    sizeFootwear: string;

    @Column()
    occassion: string;
}