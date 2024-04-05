import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Animal extends Document {
  @Prop()
  nom: string;
  
  @Prop()
  taille: number;

  @Prop()
  poids: number;

  @Prop()
  forceMorsure: number;

  @Prop()
  force: number;

  @Prop()
  regimeAlimentaire: string;

  @Prop()
  vitesse: number;

  @Prop()
  intelligence: number;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);