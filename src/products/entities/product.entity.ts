import { Wishlist } from "src/users/entities/wishlist.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Colors } from "./color.entity";
import { ProductBrands } from "./product-brand.entity";
import { Availability } from "./availability.entity";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    product_id: string;

    @Column()
    product_title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @ManyToOne(() => Colors, primaryColor => primaryColor.product)
    primaryColor: Colors;

    @ManyToOne(() => Colors, secondaryColor => secondaryColor.product)
    secondaryColor: Colors;

    @ManyToOne(() => ProductBrands, brands => brands.product)
    brand: ProductBrands;

    @ManyToOne(() => Availability, availableSizes => availableSizes.product)
    availableSizes: Availability

    @Column()
    price: string;

    @Column({ nullable: true })
    product_category: string;

    @Column()
    gender: string;

    @Column({ unique: true })
    product_url: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updateddAt: Timestamp;

    @OneToMany(() => Wishlist, wishlist => wishlist.product)
    wishlist: Wishlist[];
}
