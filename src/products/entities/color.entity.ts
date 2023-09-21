import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./product.entity";

@Entity()
export class Colors {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    color: string;

    @OneToMany(() => Products, product => product.primaryColor && product.secondaryColor)
    product: Products[];

    // @OneToMany(() => Products, product => product.secondaryColor)
    // product: Products[];
}
