import { Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./product.entity";

@Entity()
export class Availability {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Products, product => product.availableSizes)
    product: Products[];
}