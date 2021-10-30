import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/create-cat';

@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //CRUD - create (POST), read(GET), update(PUT), delete(DEL)

  @Delete('')
  deleteCat(@Query('id') id: string) {
    return this.appService.deleteCat(id);
  }

  @Put('')
  updateCat(@Body() dto,
  @Query('id') id: string,
  ) {
    return this.appService.findCatByName({...dto, id});
  }

  @Get('')
  getCat() {
    return this.appService.getCat();
  }

  @Post('')
  getHello(@Body() dto: CreateCatDto) {
    return this.appService.createCat(dto);
  }
}
