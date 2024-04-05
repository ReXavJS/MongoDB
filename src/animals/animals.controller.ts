// src/animals/animals.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnimalsService } from './animals/animals.service';
import { Animal } from './animal.model';

@Controller('animals')
export class AnimalsController {
    constructor(private readonly animalsService: AnimalsService) {}

    @Post()
    async create(@Body() createAnimalDto: any): Promise<Animal> {
        return this.animalsService.create(createAnimalDto);
    }

    @Get()
    async findAll(): Promise<Animal[]> {
        return this.animalsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Animal> {
        return this.animalsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateAnimalDto: any): Promise<Animal> {
        return this.animalsService.update(id, updateAnimalDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Animal> {
        return this.animalsService.remove(id);
    }
}
