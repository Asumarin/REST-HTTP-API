import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/create-cat';

@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  getHello(@Body() dto: CreateCatDto) {
    return this.appService.createCat(dto);
  }
}
