import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(): string {
    return 'Orders';
  }

  @Post()
  create() {
    return {
      message: 'Acción de crear Oders',
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Order ${id} actualizado`,
      id,
      payload,
    };
  }
}
