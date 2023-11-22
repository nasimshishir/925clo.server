import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./product.entity";

@Entity()
export class Seasons {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    season: string

    @ManyToMany(() => Products, product => product.season)
    product: Products[]
}