import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
import * as products from './products.json'
import { CreateProductParams } from './utils/types';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productRepository: Repository<Products>,
  ) { }


  async createProduct(productDetails: CreateProductParams[]) {
    productDetails?.map((item) => {
      // item.color.map((color))
      const product = {
        product_id: item.product_id,
        primaryColor: item.color.map((color) => { return color.primary })
      }
      console.log(product);

    })

  }

  findAll() {
    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
