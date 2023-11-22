import { Wishlist } from "src/users/entities/wishlist.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { StyleProfile } from "./style-profile.entity";
import { EmailToken } from "./email-verification-token.entity";
import { UserInteractions } from "./inreractions.entity";

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

    @Column({ nullable: true },)
    passwordResetToken: string;

    @OneToOne(() => EmailToken, emailToken => emailToken.user)
    emailToken: EmailToken

    @OneToOne(() => StyleProfile, styleProfile => styleProfile.user)
    styleProfile: StyleProfile;

    @OneToMany(() => Wishlist, wishlist => wishlist.user)
    wishlist: Wishlist[];

    @OneToMany(() => UserInteractions, interactions => interactions.user)
    interations: UserInteractions[]

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updateddAt: Timestamp;

}