// animals.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from './animal.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('animals')
export class AnimalsController {
  constructor(
    @InjectModel(Animal.name) private animalModel: Model<Animal>,
    private readonly animalsService: AnimalsService,
  ) {}
  @Post()
async create(
  @Body('taille') taille: number,
  @Body('poids') poids: number,
  @Body('forceMorsure') forceMorsure: number,
  @Body('force') force: number,
  @Body('regimeAlimentaire') regimeAlimentaire: string,
  @Body('vitesse') vitesse: number,
  @Body('intelligence') intelligence: number
): Promise<Animal> {
  const newAnimal = new this.animalModel({
    taille,
    poids,
    forceMorsure,
    force,
    regimeAlimentaire,
    vitesse,
    intelligence
  });
  return this.animalsService.create(newAnimal);
}



  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() animal: Animal) {
    return this.animalsService.update(id, animal);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(id);
  }
}
