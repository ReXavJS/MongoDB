import { Schema, Document } from 'mongoose';

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
