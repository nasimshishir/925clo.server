import { Wishlist } from "src/users/entities/wishlist.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Colors } from "./color.entity";
import { ProductBrands } from "./product-brand.entity";
import { Sizes } from "./size.entity";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    product_id: number;

    @Column({ nullable: true })
    product_title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    image: string;

    @ManyToOne(() => Colors, primaryColor => primaryColor.product)
    primaryColor: Colors;

    @ManyToOne(() => Colors, secondaryColor => secondaryColor.product)
    secondaryColor: Colors;

    @ManyToOne(() => ProductBrands, brands => brands.product)
    brand: ProductBrands;

    @Column({ nullable: true })
    price: string;

    @Column({ nullable: true })
    product_category: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ unique: true })
    product_url: string;

    @ManyToMany(() => Sizes, sizes => sizes.product)
    @JoinTable()
    sizes: Sizes[]

    @Column({ nullable: true })
    occasion: string;

    @Column({ nullable: true })
    season: string;

    @Column({ nullable: true })
    type: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updateddAt: Timestamp;

    @OneToMany(() => Wishlist, wishlist => wishlist.product)
    wishlist: Wishlist[];
}
