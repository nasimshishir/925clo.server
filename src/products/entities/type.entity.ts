import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./product.entity";

@Entity()
export class ProductTypes {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @OneToMany(() => Products, products => products.type)
    @JoinColumn()
    product: Products[];
}