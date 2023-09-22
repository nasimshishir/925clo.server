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

    @Column()
    price: string;

    @Column({ nullable: true })
    product_category: string;

    @Column()
    gender: string;

    @Column({ unique: true })
    product_url: string;

    @ManyToMany(() => Sizes, sizes => sizes.product)
    @JoinTable()
    sizes: Sizes[]

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updateddAt: Timestamp;

    @OneToMany(() => Wishlist, wishlist => wishlist.product)
    wishlist: Wishlist[];
}
