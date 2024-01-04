import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ): string {
    return `Product ${productId} and category ${id}`;
  }

  @Post()
  create() {
    return {
      message: 'Acción de crear Category',
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Category ${id} actualizado`,
      id,
      payload,
    };
  }
}
