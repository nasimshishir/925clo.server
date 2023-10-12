import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('add')
  async create(@Body() createProductDto: CreateProductDto[]) {
    return await this.productsService.createProduct(createProductDto);
  }

  @Get(':all')
  async findAll(@Query('gender') gender: string, @Query('type') type: string, @Query('size') size: string, @Query('color') color: string) {
    const products = await this.productsService.findAll(gender, type, size, color);
    if (products) {
      return {
        success: true,
        data: products
      }
    }
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
