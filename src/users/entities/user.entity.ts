import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StyleProfile } from "../../user-profile/entities/styleProfile.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    emailVerified: boolean;

    @OneToOne(() => StyleProfile, StyleProfile => StyleProfile.user)
    styleProfile: StyleProfile;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updateddAt: Date;

}