import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `Products: limit=> ${limit}, offset=> ${offset}, brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter(): string {
    return `Soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number): any {
    // return {
    //   message: `Product ${productId}`,
    // };
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Acción de crear Product',
    //   payload,
    // };
    this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   message: `Product ${id} actualizado`,
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   message: `Product ${id} eliminado`,
    //   id,
    // };
    return this.productsService.delete(id);
  }
}
