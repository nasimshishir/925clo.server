import { Wishlist } from "src/users/entities/wishlist.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { StyleProfile } from "./style-profile.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    emailVerified: boolean;

    @OneToOne(() => StyleProfile, styleProfile => styleProfile.user)
    styleProfile: StyleProfile;

    @OneToMany(() => Wishlist, wishlist => wishlist.user)
    wishlist: Wishlist[];

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updateddAt: Timestamp;

}