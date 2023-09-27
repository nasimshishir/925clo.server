import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
// import * as products from './products.json'
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

    const products = productDetails.reduce((sizes, product) => {
      const allSizes = product.sizes.reduce((sizeP, sizeC) => {
        if (sizeC.stock) {

          const sizeObject = {
            product_id: product.product_id,
            size: sizeC.size,
          };
          sizeP.push(sizeObject);
        }
        return sizeP;
      }, []);

      return sizes;
    }, []);

    // const products = productDetails.forEach(product => {
    //   const sizes = product.sizes.reduce((size) => {

    //   } )
    // })

    // Product DTO
    // const product = {
    //   product_id: item.product_id,
    //   product_title: item.product_title,
    //   description: item.description,
    //   image: item.image,
    //   price: item.price,
    //   product_category: item.product_category,
    //   gender: item.gender,
    //   product_url: item.product_url,
    //   primaryColor: item.color?.primary,
    //   secondaryColor: item.color?.secondary,
    //   brand: item.brand,
    //   season: item.season
    // }
    return products;
  }

  async createProduct() {

  }

  findAll() {
    return;
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
