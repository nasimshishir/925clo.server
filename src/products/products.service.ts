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


  async destructureProducts(productDetails: CreateProductParams[]) {
    productDetails.forEach(async (item) => {

      // const itemsizes = item.sizes.forEach((size) => {
      //   async function dbCheck(size: { size: string, stock: boolean }) {
      //     return await this.sizesRepository.findOne({ size: size.size })
      //   }
      //   const productSizes = dbCheck(size);
      //   return productSizes;
      // })

      // const itemColors = item.color.forEach((color) =>  {
      //   async function dbCheckPrimary(color: { primary?: string, secondary?: string }) {
      //     return await this.sizesRepository.findOne({ color: color.primary })
      //   }
      //   async function dbCheckSecondary(color: { primary?: string, secondary?: string }) {
      //     return await this.sizesRepository.findOne({ color: color.secondary })
      //   }

      //   const productPrimaryColor = dbCheckPrimary(color);
      //   const productSecondaryColor = dbCheckSecondary(color);
      //   return { productPrimaryColor, productSecondaryColor }
      // })

      //   const product = {
      //     product_id: item.product_id,
      //     // sizes: itemsizes
      //   }
      //   console.log(product);

      //   return product;

      // }
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
