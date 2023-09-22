import { IsNotEmpty } from "class-validator";
import { Sizes } from "../entities/size.entity";
import { Colors } from "../entities/color.entity";

export class CreateProductDto {

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
    primaryColor: Colors;

    @IsNotEmpty()
    secondaryColor: Colors;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    product_url: string;

    @IsNotEmpty()
    sizes: Sizes[];
}
