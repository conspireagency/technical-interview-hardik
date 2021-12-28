import { Controller, Get, Post, Body, Patch, Query, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
import {CreateCarMakesDto,CreateCarModelsDto,CreateCarNotesDto,CreateCarPartNumberAndSizeDto,CreateCarSubModelsDto} from "./entities/car.entity"


@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('/years')
  findAll() {
    return this.carsService.getCarYears();
  }

  @Post('/makes')
  findMakes(@Body() request: CreateCarMakesDto) {
    return this.carsService.getMakes(request);
  }

  @Post('/models')
  findModel(@Body() request: CreateCarModelsDto) {
    
    return this.carsService.getModels(request);
  }

  @Post('/submodels')
  findSubmodel(@Body() request: CreateCarSubModelsDto) {
    return this.carsService.getSubmodels(request);
  }

  @Post('/notes')
  findNotes(@Body() request: CreateCarNotesDto) {
    return this.carsService.getNotes(request);
  }

    @Post('/partnum')
  findPartnum(@Body() request: CreateCarPartNumberAndSizeDto) {
    return this.carsService.getPartNumber(request);
  }
}
