import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
import * as products from './products.json'
import { CreateProductParams } from './utils/types';
import { Sizes } from './entities/size.entity';
import { Colors } from './entities/color.entity';
import { ProductBrands } from './entities/product-brand.entity';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productRepository: Repository<Products>,
    @InjectRepository(Sizes) private sizesRepository: Repository<Sizes>,
    @InjectRepository(Colors) private colorsRepository: Repository<Colors>,
    @InjectRepository(ProductBrands) private brandsRepository: Repository<ProductBrands>,
  ) { }

  destructureProducts(productDetails: CreateProductParams[]) {

    productDetails.forEach(async (item) => {

      const itemsizes = item.sizes.forEach(async (size) => {
        const productSizes = await this.sizesRepository.findOne({ where: { size: size.size } });
        if (!productSizes) {
          const addedSizes = await this.sizesRepository.save({ size: size.size })
        }
        console.log(productSizes, 'inside single sizes');

        return productSizes;
      })

      console.log(itemsizes, 'array of sizes');

      // Product DTO
      const product = {
        product_id: item.product_id,
        product_title: item.product_title,
        description: item.description,
        image: item.image,
        price: item.price,
        product_category: item.product_category,
        gender: item.gender,
        product_url: item.product_url,
        primaryColor: item.color.primary,
        secondaryColor: item.color.secondary,
        brand: item.brand,
        season: item.season,
        // sizes: itemsizes
      }
      console.log(product);
    })

  }

  async createProduct() {

  }

  findAll() {
    return products;
  }

  findOne(param: number | string) {
    return `This action returns a #${param} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
