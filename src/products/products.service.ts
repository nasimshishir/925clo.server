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

  async destructureProducts(productDetails: CreateProductParams[]) {

    const allProducts = productDetails.map(async (product) => {
      const singleProduct = {
        product_id: product.product_id,
        product_title: product.product_title,
        description: product.description,
        image: product.image,
        price: product.price,
        product_category: product.product_category,
        type: product.type,
        gender: product.gender,
        product_url: product.product_url,
        occasion: product.occasion,
        season: product.season,
        primaryColor: null,
        secondaryColor: null,
        sizes: [],
        brand: null,
      }
      const newProduct = this.productRepository.create(singleProduct);

      product.sizes.map(async (size) => {
        if (size.stock) {
          const sizeDB = await this.sizesRepository.findOne({ where: { size: size.size } })
          // return sizeDB.product.push(newProduct)
          return newProduct.sizes.push(sizeDB)
        }
      })

      return await this.productRepository.save(newProduct);
      // return singleProduct

    })
  }

  async createProduct() {

  }

  async findAll(gender, type, size,): Promise<Products[]> {
    return await this.productRepository.find({ where: { gender: `${gender}` }, });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
