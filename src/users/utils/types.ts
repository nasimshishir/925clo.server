import { type } from "os";
import { Products } from "src/products/entities/product.entity";
import { UserInteractions } from "../entities/inreractions.entity";

export type CreateUserFormat = {
    name: string;
    email: string;
    password: string;
    emailVerified: boolean;
};

export type UpdateUserFormat = {
    name: string;
    email: string;
    password: string;
};

export type UserInteractionsFormat = {
    liked_products: UserInteractions[]
    disliked_products: UserInteractions[]
}