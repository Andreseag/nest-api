import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(): string {
    return 'Customers';
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear Customers',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Customer ${id} actualizado`,
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Customer ${id} eliminado`,
      id,
      payload,
    };
  }
}
