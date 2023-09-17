import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

    product_id: string;

    product_title: string;

    description: string;

    image: string;

    price: string;

    product_category: string;

    type: string;

    gender: string;

    product_url: string;
}
