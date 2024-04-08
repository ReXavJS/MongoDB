import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from './animal.model';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}

  create(animal: Animal) {
    const createdAnimal = new this.animalModel(animal);
    return createdAnimal.save();
  }

  findAll() {
    return this.animalModel.find().exec();
  }

  findOne(id: string) {
    return this.animalModel.findById(id).exec();
  }

  update(id: string, animal: Animal): Promise<Animal> {
    console.log(id,animal);
    return this.animalModel.findByIdAndUpdate(id, animal, { new: true }).exec();
  }
  
  remove(id: string) {
    return this.animalModel.findByIdAndDelete(id).exec();
  }
}



