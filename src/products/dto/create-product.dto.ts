import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    product_id: string;

    @IsNotEmpty()
    product_title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    product_category: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    brand: string;

    @IsNotEmpty()
    season: string;

    @IsNotEmpty()
    product_url: string;
}
