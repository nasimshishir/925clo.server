import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
import * as products from './products.json'
import { CreateProductParams } from './utils/types';
import { Sizes } from './entities/size.entity';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productRepository: Repository<Products>,
    @InjectRepository(Sizes) private sizesRepository: Repository<Sizes>,
  ) { }


  async createProduct(productDetails: CreateProductParams[]) {
    return productDetails?.map((item) => {

      const itemSizes = item.sizes.forEach((size) => {
        async function dbCheck(size: { size: string, stock: boolean }): Promise<Sizes> {
          return await this.sizesRepository.findOne({})
        }
      })

      const product = {
        product_id: item.product_id,
        primaryColor: item.color[0].primary,
        secondaryColor: item.color[0].secondary,
      }
      console.log(product);

      return product;

    })

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
