import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products: limit=> ${limit}, offset=> ${offset}, brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter(): string {
    return `Soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string): string {
    return `Product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear Product',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Product ${id} actualizado`,
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Product ${id} eliminado`,
      id,
    };
  }
}
