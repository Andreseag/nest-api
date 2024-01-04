import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  newEndpoint(): string {
    return 'Hello World in new!';
  }

  @Get('/new/')
  newEndpoint2(): string {
    return 'Hello World in new2!';
  }
}
