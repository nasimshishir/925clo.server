import { Users } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class ForgottenPassword {

    @PrimaryColumn()
    email: string;

    @Column()
    resetToken: string;
}