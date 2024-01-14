import { UserInteractions } from "../entities/inreractions.entity";

export type UserInteractionsFormat = {
    liked_products: UserInteractions[]
    disliked_products: UserInteractions[]
}

export type CreateUserInteractionParams = {
    userId: number
    productId: number
    type: 'liked' | 'disliked'
}