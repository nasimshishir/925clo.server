import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UserInteractions } from "./entities/inreractions.entity"
import { ProductsService } from "src/products/products.service"
import { UsersService } from "src/users/users.service"
import { Repository } from "typeorm"
import { CreateUserInteractionParams, UserInteractionsFormat } from "./utils/types"


@Injectable()
export class UserInteractionsService {
    constructor(
        @InjectRepository(UserInteractions) private userInteractionsRepository: Repository<UserInteractions>,
        private readonly productsService: ProductsService,
        private readonly usersService: UsersService
    ) { }


    async createUserInteractions(CreateUserInteractionsinfo: CreateUserInteractionParams) {
        const user = await this.usersService.findOneUser(CreateUserInteractionsinfo.userId)
        const product = await this.productsService.findOneProduct(CreateUserInteractionsinfo.productId)
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        if (!product) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
        }

        const newInteraction = this.userInteractionsRepository.create({ user, product, type: CreateUserInteractionsinfo.type })
        return await this.userInteractionsRepository.save(newInteraction);

    }

    async getUserInteractions(id: number): Promise<UserInteractionsFormat | string> {
        const userDB = await this.usersService.findOneUser(id);
        if (userDB) {
            const liked_products = await this.userInteractionsRepository.createQueryBuilder()
                .select(['product'])
                .where("userId", { userId: userDB.id })
                .where('type', { type: 'liked' })
                .getMany()
            const disliked_products = await this.userInteractionsRepository.createQueryBuilder()
                .select(['product'])
                .where("userId", { userId: userDB.id })
                .where('type', { type: 'disliked' })
                .getMany()

            const userInteraction = {
                liked_products,
                disliked_products
            }
            return userInteraction;
        } else {
            throw new HttpException('User Not Found', HttpStatus.FOUND)
        }
    }
}
