import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(): string {
    return 'Brands';
  }

  @Post()
  create() {
    return {
      message: 'Acción de crear Brands',
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Brand ${id} actualizado`,
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Brand ${id} eliminado`,
      id,
      payload,
    };
  }
}
