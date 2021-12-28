import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './carsLookup/cars.module';
import { AddcarModule } from './addcar/addcar.module';
import {CsvModule} from "nest-csv-parser"

@Module({
  imports: [CarsModule, AddcarModule,CsvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
