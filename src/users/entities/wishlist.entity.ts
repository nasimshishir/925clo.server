import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "src/products/entities/product.entity";
import { Users } from "src/users/entities/user.entity";

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Users, user => user.wishlist)
    @JoinColumn()
    user: Users;

    @Column()
    type: 'single' | 'set';

    @Column({ nullable: true })
    setId: number;

    @ManyToOne(() => Products, products => products.wishlist)
    @JoinColumn()
    product: Products;
}