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
import { Seasons } from './entities/season.entity';
import { ProductTypes } from './entities/type.entity';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productRepository: Repository<Products>,
    @InjectRepository(Sizes) private sizesRepository: Repository<Sizes>,
    @InjectRepository(Colors) private colorsRepository: Repository<Colors>,
    @InjectRepository(ProductBrands) private brandsRepository: Repository<ProductBrands>,
    @InjectRepository(Occasions) private occasionsRepository: Repository<Occasions>,
    @InjectRepository(Seasons) private seasonsRepository: Repository<Seasons>,
    @InjectRepository(ProductTypes) private typesRepository: Repository<ProductTypes>,
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
          currency: product.currency,
          type: null,
          gender: product.gender,
          product_url: product.product_url,
          season: [],
          color: null,
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

        for (let i = 0; i < product.season.length; i++) {
          let season = product.season[i];
          const seasonDB = await this.seasonsRepository.findOne({ where: { season: season.toLowerCase() } })
          newProduct.season.push(seasonDB)
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

        const productType = async (product: CreateProductParams): Promise<ProductTypes> => {
          if (product.type) {
            const typeDB = await this.typesRepository.findOne({ where: { type: product.brand } })
            if (!typeDB) {
              const productBrand = this.typesRepository.create({ type: product.brand })
              return await this.typesRepository.save(productBrand);
            } else {
              return typeDB;
            }
          } else {
            return null
          }
        }
        const productColor = async (product: CreateProductParams): Promise<Colors> => {
          if (product.color) {
            const colorDB = await this.colorsRepository.findOne({ where: { color: product.color } })
            if (!colorDB) {
              const productColor = this.colorsRepository.create({ color: product.color })
              return await this.colorsRepository.save(productColor);
            } else {
              return colorDB;
            }
          } else {
            return null
          }
        }
        newProduct.brand = await productBrand(product)
        newProduct.type = await productType(product)
        newProduct.color = await productColor(product)


        await this.productRepository.save(newProduct);
      })
    );
  }

  async findAll(): Promise<Products[]> {
    // size?: string[], color?: string[], brand?: string[]
    // let products: Products[]
    // if (size.length === 0) {
    //   products = await this.productRepository.find()
    // } else if (size.length === 1) {
    //   products = await this.productRepository.find({ relations: {} })
    // }

    return await this.productRepository.find();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
