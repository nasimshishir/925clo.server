import { Products } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "../../users/entities/user.entity";

@Entity()
export class UserInteractions {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Users, user => user.interations)
    @JoinColumn()
    user: Users

    @ManyToOne(() => Products, products => products.interaction)
    @JoinColumn()
    product: Products

    @Column()
    type: 'liked' | 'disliked'

}