import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async createCat(dto: CreateCatDto): Promise<Cat> {
    const cat = await this.catModel.create({...dto});
    return cat;
  }
}
