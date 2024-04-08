import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Animal extends Document {
  @Prop()
  nom: string;
  
  @Prop({index: true})
  taille: number;

  @Prop()
  poids: number;

  @Prop()
  forceMorsure: number;

  @Prop({index: true})
  force: number;

  @Prop()
  regimeAlimentaire: string;

  @Prop()
  vitesse: number;

  @Prop()
  intelligence: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Espece' })
  espece: MongooseSchema.Types.ObjectId;

}

export const AnimalSchema = SchemaFactory.createForClass(Animal);