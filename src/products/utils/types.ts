export type CreateProductParams = {

    product_id?: string;

    product_title?: string;

    description?: string;

    image?: string;

    price?: string;

    currency: string;

    color?: string;

    type?: string;

    gender?: string;

    product_url?: string;

    sizes?: { size: string, stock: boolean }[];

    occasion?: string[];

    brand?: string;

    season?: string[];
}