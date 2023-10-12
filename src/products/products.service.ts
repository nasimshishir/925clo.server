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
import { Occasions } from './entities/occasion.entity';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productRepository: Repository<Products>,
    @InjectRepository(Sizes) private sizesRepository: Repository<Sizes>,
    @InjectRepository(Colors) private colorsRepository: Repository<Colors>,
    @InjectRepository(ProductBrands) private brandsRepository: Repository<ProductBrands>,
    @InjectRepository(Occasions) private occasionsRepository: Repository<Occasions>,
  ) { }

  async createProduct(productDetails: CreateProductParams[]) {
    await Promise.all(
      productDetails.map(async (product) => {

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
          season: product.season,
          primaryColor: null,
          secondaryColor: null,
          sizes: [],
          brand: null,
          occasion: [],
        }
        const newProduct = this.productRepository.create(singleProduct);

        for (let i = 0; i < product.sizes.length; i++) {
          let size = product.sizes[i];
          if (size.stock) {
            const sizeDB = await this.sizesRepository.findOne({ where: { size: size.size } })
            newProduct.sizes.push(sizeDB)
          }
        }

        for (let i = 0; i < product.occasion.length; i++) {
          let occasion = product.occasion[i];
          const occasionDB = await this.occasionsRepository.findOne({ where: { occasion: occasion.toLowerCase() } })
          newProduct.occasion.push(occasionDB)
        }

        const primaryColor = async (product: CreateProductParams): Promise<Colors> => {
          if (product.color.primary) {
            const colorDB = await this.colorsRepository.findOne({ where: { color: product.color.primary } })
            if (!colorDB) {
              const primaryColor = this.colorsRepository.create({ color: product.color.primary })
              return await this.colorsRepository.save(primaryColor);
            } else {
              return colorDB;
            }
          } else {
            return null
          }
        }
        const secondaryColor = async (product: CreateProductParams): Promise<Colors> => {
          if (product.color.secondary) {
            const colorDB = await this.colorsRepository.findOne({ where: { color: product.color.secondary } })
            if (!colorDB) {
              const secondaryColor = this.colorsRepository.create({ color: product.color.secondary })
              return await this.colorsRepository.save(secondaryColor);
            } else {
              return colorDB;
            }
          } else {
            return null
          }
        }
        const productBrand = async (product: CreateProductParams): Promise<ProductBrands> => {
          if (product.brand) {
            const brandDB = await this.brandsRepository.findOne({ where: { brand: product.brand } })
            if (!brandDB) {
              const productBrand = this.brandsRepository.create({ brand: product.brand })
              return await this.brandsRepository.save(productBrand);
            } else {
              return brandDB;
            }
          } else {
            return null
          }
        }
        newProduct.primaryColor = await primaryColor(product)
        newProduct.secondaryColor = await secondaryColor(product)
        newProduct.brand = await productBrand(product)


        await this.productRepository.save(newProduct);
      })
    );
  }

  async findAll(type: string[], size: string[], color: string[], brand: string[]): Promise<Products[]> {
    const products = await this.productRepository.find({ where: { type: `${type}` } })

    return products;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
