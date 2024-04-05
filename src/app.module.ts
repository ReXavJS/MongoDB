import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:8081/projetanimal-container'), AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
