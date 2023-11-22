import { Wishlist } from "src/users/entities/wishlist.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Colors } from "./color.entity";
import { ProductBrands } from "./product-brand.entity";
import { Sizes } from "./size.entity";
import { Occasions } from "./occasion.entity";
import { UserInteractions } from "src/users/entities/inreractions.entity";
import { Seasons } from "./season.entity";
import { ProductTypes } from "./type.entity";
import { type } from "os";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_id: string;

    @Column()
    product_title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @ManyToOne(() => Colors, color => color.product)
    color: Colors;

    @ManyToOne(() => ProductBrands, brands => brands.product)
    @JoinColumn()
    brand: ProductBrands;

    @Column()
    price: string;

    @Column()
    currency: string;

    @Column()
    gender: string;

    @Column({ unique: true })
    product_url: string;

    @ManyToMany(() => Sizes, sizes => sizes.product)
    @JoinTable({ name: 'product_sizes' })
    sizes: Sizes[]

    @ManyToMany(() => Occasions, occasion => occasion.product)
    @JoinTable({ name: 'product_occasions' })
    occasion: Occasions[];

    @ManyToMany(() => Seasons, season => season.product)
    @JoinTable({ name: 'product_seasons' })
    season: Seasons[];

    @ManyToOne(() => ProductTypes, type => type.product)
    @JoinColumn()
    type: ProductTypes;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updateddAt: Timestamp;

    @OneToMany(() => Wishlist, wishlist => wishlist.product)
    wishlist: Wishlist[];

    @OneToMany(() => UserInteractions, interactions => interactions.product)
    interaction: UserInteractions[]
}
