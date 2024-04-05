import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsService } from './animals.service';
import { Animal, AnimalSchema } from './animal.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }])],
  providers: [AnimalsService],
  exports: [AnimalsService]
})
export class AnimalsModule {}

