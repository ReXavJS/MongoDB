import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Espece extends Document {
  @Prop()
  nom: string;
  
  @Prop()
  description: string;
}

export const EspeceSchema = SchemaFactory.createForClass(Espece);