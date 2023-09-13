import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_id: string;

    @Column({ unique: true })
    product_title: string;

    @Column({ unique: true })
    description: string;

    @Column()
    image: string;

    @Column()
    price: string;

    @Column()
    product_category: string;

    @Column()
    type: string;

    @Column()
    gender: string;

    @Column()
    brand: string;

    @Column()
    season: string;

    @Column()
    product_url: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updateddAt: Date;
}
