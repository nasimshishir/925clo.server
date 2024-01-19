import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

  @Get(':category')
  async findAll(@Param('category') category: string, @Query('brand') brand: string, @Query('type') type: string, @Query('size') size: string, @Query('color') color: string) {

    // if (brand.includes(',')) {
    //   const brands = brand.split(',');
    // }
    // if (type.includes(',')) {
    //   const types = type.split(',');
    // }
    // if (size.includes(',')) {
    //   const sizes = size.split(',');
    // }
    // if (color.includes(',')) {
    //   const colors = color.split(',');
    // }

    return await this.productsService.findAll(category)

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
