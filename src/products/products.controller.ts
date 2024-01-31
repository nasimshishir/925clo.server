import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res, HttpException, HttpStatus, } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('add')
  async create(@Body() createProductDto: CreateProductDto[]) {
    await this.productsService.createProduct(createProductDto);
    return {
      status: "Products added successfully",
    }
  }

  // @Get(':category')
  // async findAllProductsByCategory(@Param('category') category: string, @Query('brand') brand: string, @Query('size') size: string, @Query('color') color: string) {

  //   let products: Products[]
  //   if (category === 'summer' || 'winter' || 'autumn' || 'spring') {
  //     const param = 'season'
  //     products = await this.productsService.findAll(param, category)
  //   } else if (category === 'top' || 'bottom' || 'outerwear' || 'footwear' || 'accessories') {
  //     const param = 'type'
  //     products = await this.productsService.findAll(param, category)
  //   } else if (category === 'everyday_wear' || 'date_night' || 'cozy_fits' || 'occasion_wear' || 'work_wear') {
  //     const param = 'occasion'
  //     products = await this.productsService.findAll(param, category)
  //   } else {
  //     return new HttpException('Not found', HttpStatus.NOT_FOUND)
  //   }

  //   return products


  //   // if (brand.includes(',')) {
  //   //   const brands = brand.split(',');
  //   // }
  //   // if (type.includes(',')) {
  //   //   const types = type.split(',');
  //   // }
  //   // if (size.includes(',')) {
  //   //   const sizes = size.split(',');
  //   // }
  //   // if (color.includes(',')) {
  //   //   const colors = color.split(',');
  //   // }
  // }
  @Get('allproducts')
  async findAllProducts() {
    return await this.productsService.findAllProducts()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

}
