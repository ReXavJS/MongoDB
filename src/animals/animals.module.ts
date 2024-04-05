import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsService } from './animals.service';
import { Animal, AnimalSchema } from './animal.model';
import { AnimalsController } from './animals.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
  exports: [AnimalsService]
})
export class AnimalsModule {}

