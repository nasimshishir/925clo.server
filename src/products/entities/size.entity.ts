import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sizes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: string;
}