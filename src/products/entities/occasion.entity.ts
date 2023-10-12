import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./product.entity";

@Entity()
export class Occasions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    occasion: string;

    @ManyToMany(() => Products, product => product.occasion)
    product: Products[];
}