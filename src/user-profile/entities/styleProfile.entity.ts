import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./user-profile.entity";

@Entity()
export class StyleProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserProfile, profile => profile.styleProfile)
    profile: UserProfile;

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