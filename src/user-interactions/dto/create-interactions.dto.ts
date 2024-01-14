import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class CreateUserInteractionsDto {

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    productId: number;

    emailVerified: boolean;

    @IsNotEmpty()
    type: 'liked' | 'disliked'
}
