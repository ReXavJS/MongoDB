import { Module } from '@nestjs/common';

@Module({
  providers: [AnimalsService]
})
export class AnimalsModule {}

import { Schema, Document } from 'mongoose';
import { AnimalsService } from './animals/animals.service';

export interface Animal extends Document {
    name: string;
    species: string;
    age: number;
}

export const AnimalSchema = new Schema({
    name: String,
    species: String,
    age: Number,
});

