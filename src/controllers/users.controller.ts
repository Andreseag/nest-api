import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'Users';
  }

  @Post()
  create() {
    return {
      message: 'Acción de crear Post',
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Post ${id} actualizado`,
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Post ${id} eliminado`,
      id,
      payload,
    };
  }
}
