import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async deleteCat(id: string): Promise<Cat> {
    const cat = await this.catModel.findByIdAndRemove(id);
    return cat;
  }

  async findCatByName({name, age, id}: {name?: string, age?: number, id: string}): Promise<Cat> {
    const cat = await this.catModel.findById(id);
    cat.name = name ? name : cat.name;
    cat.age = age ? age : cat.age;
    cat.save()
    return cat;
  }

  async getCat(): Promise<Cat[]> {
    const cats = await this.catModel.find();
    return cats;
  }

  async createCat(dto: CreateCatDto): Promise<Cat> {
    const cat = await this.catModel.create({...dto});
    return cat;
  }
}
