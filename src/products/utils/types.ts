export type CreateProductParams = {

    product_id: number;

    product_title: string;

    description: string;

    image: string;

    price: string;

    product_category: string;

    color: { primary?: string, secondary?: string }[];

    type: string;

    gender: string;

    product_url: string;

    sizes: { size: string, stock: boolean }[];

    occasion: string;

    brand: string;

    season: string
}