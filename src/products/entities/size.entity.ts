import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./product.entity";

@Entity()
export class Sizes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: string;

    @ManyToMany(() => Products, product => product.sizes)
    product: Products[]
}