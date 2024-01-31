import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
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
          product_title: product.product_title.toLowerCase(),
          description: product.description.toLowerCase(),
          image: product.image,
          price: product.price,
          currency: "GBP",
          type: null,
          gender: product.gender.toLowerCase(),
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
            const sizeDB = await this.sizesRepository.findOne({ where: { size: size.size.toLowerCase() } })
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
            const brandDB = await this.brandsRepository.findOne({ where: { brand: product.brand.toLowerCase() } })
            if (!brandDB) {
              const productBrand = this.brandsRepository.create({ brand: product.brand.toLowerCase() })
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
            const typeDB = await this.typesRepository.findOne({ where: { type: product.brand.toLowerCase() } })
            if (!typeDB) {
              const productBrand = this.typesRepository.create({ type: product.brand.toLowerCase() })
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
            const colorDB = await this.colorsRepository.findOne({ where: { color: product.color.toLowerCase() } })
            if (!colorDB) {
              const productColor = this.colorsRepository.create({ color: product.color.toLowerCase() })
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

  async findAll(param: string, category: string): Promise<Products[]> {
    // size?: string[], color?: string[], brand?: string[]
    // let products: Products[]
    // if (size.length === 0) {
    //   products = await this.productRepository.find()
    // } else if (size.length === 1) {
    //   products = await this.productRepository.find({ relations: {} })
    // }

    // if (param === 'season') {
    //   const season = await this.seasonsRepository.findOne({ where: { season: category } })
    //   if (season) {
    //     const products = await this.productRepository.find({
    //       where: { season },
    //       relations: [
    //         "color", "type", "occasion", "brand", "season"
    //       ]
    //     });
    //     return products;
    //   }

    // }
    // if (param === 'top' || 'bottom' || 'outerwear' || 'footwear' || 'accessories') {
    //   const type = await this.typesRepository.findOne({ where: { type: param } })
    //   console.log(type);
    //   if (type) {
    //     const products = await this.productRepository.find({
    //       where: { type },
    //       relations: [
    //         "color", "type", "occasion", "brand"
    //       ]
    //     });
    //     return products;
    //   }
    // }
    // if (param === 'everyday_wear' || 'date_night' || 'cozy_fits' || 'occasion_wear' || 'work_wear') {
    //   const occasion = await this.occasionsRepository.findOne({ where: { occasion: param } })
    //   console.log(occasion);
    //   if (occasion) {
    //     const products = await this.productRepository.find({
    //       where: { occasion },
    //       relations: [
    //         "color", "type", "occasion", "brand"
    //       ]
    //     });
    //     return products;
    //   }
    // }

    console.log(param, category);
    return []

  }

  async findAllProducts(): Promise<Products[]> {
    return await this.productRepository.find()
  }

  async findOneProduct(id: number): Promise<Products> {
    const product = await this.productRepository.findOne({ select: ['id'], where: { id } })
    return product;
  }


  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
