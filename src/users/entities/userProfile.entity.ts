import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StyleProfile } from "./styleProfile.entity";

@Entity()
export class UserProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Users, user => user.userProfile)
    @JoinColumn()
    user: Users;

    @OneToOne(() => StyleProfile)
    @JoinColumn()
    styleProfile: StyleProfile;

    @Column()
    location: string;

    @Column()
    profileImgUrl: string
}