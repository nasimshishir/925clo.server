import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StyleProfile } from "./styleProfile.entity";
import { Users } from "src/users/entities/user.entity";
import { Wishlist } from "./wishlist.entity";

@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profileImg: string;

    @OneToOne(() => Users, user => user.profile)
    @JoinColumn()
    user: Users;

    @OneToOne(() => StyleProfile, styleProfile => styleProfile.profile)
    @JoinColumn()
    styleProfile: StyleProfile;

    @OneToOne(() => Wishlist, wishlist => wishlist.profile)
    @JoinColumn()
    wishlist: Wishlist;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updateddAt: Date;


}
