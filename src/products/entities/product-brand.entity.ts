import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./product.entity";

@Entity()
export class ProductBrands {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @OneToMany(() => Products, products => products.brand)
    @JoinColumn()
    product: Products[];
}