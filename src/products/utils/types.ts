export type CreateProductParams = {

    product_title: string;

    description: string;

    currency: string;

    image: string;

    price: string;

    brand: string;

    color: string;

    type: string;

    gender: string;

    product_url: string;

    sizes: { size: string, stock: boolean }[];

    occasion: string[];

    season: string[];
}