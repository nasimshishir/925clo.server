import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    product_id: string;

    @Column({ nullable: true })
    product_title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true })
    price: string;

    @Column({ nullable: true })
    product_category: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ unique: true, nullable: true })
    product_url: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updateddAt: Date;
}
