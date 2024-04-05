// src/animals/animals.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from '../animal.model';

@Injectable()
export class AnimalsService {
    constructor(@InjectModel('Animal') private readonly animalModel: Model<Animal>) {}

    async create(createAnimalDto: any): Promise<Animal> {
        const createdAnimal = new this.animalModel(createAnimalDto);
        return createdAnimal.save();
    }

    async findAll(): Promise<Animal[]> {
        return this.animalModel.find().exec();
    }

    async findOne(id: string): Promise<Animal> {
        return this.animalModel.findById(id).exec();
    }

    async update(id: string, updateAnimalDto: any): Promise<Animal> {
        return this.animalModel.findByIdAndUpdate(id, updateAnimalDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Animal> {
        return this.animalModel.findByIdAndDelete(id).exec();
    }
}



