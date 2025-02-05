import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('classify-number')
  async classifyNumber(@Query('number') number: number) {
    return await this.appService.classifyNumber(number);
  }
}
