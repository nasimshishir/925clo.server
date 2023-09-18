import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./user-profile.entity";

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserProfile, profile => profile.wishlist)
    profile: UserProfile;

    @Column()
    type: 'single' | 'set';

}