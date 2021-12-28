import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('/years')
  findAll() {
    return this.carsService.getCarYears();
  }

  @Get('/makes/:year')
  findMakes(@Param('year') year: string) {
    return this.carsService.getMakes(year);
  }

  @Get('models/:year/:makes')
  findModel(@Param('year') year: string, @Param('makes') makes:string) {
    return this.carsService.getModels(year,makes);
  }

  @Get('/submodels/:year/:makes/:model')
  findSubmodel(@Param('year') year: string, @Param('makes') makes:string,@Param('model') model:string) {
    return this.carsService.getSubmodels(year,makes,model);
  }

  @Get('/notes/:year/:makes/:model:/submodel')
  findNotes(@Param('year') year: string, @Param('makes') makes:string,@Param('model') model:string,@Param('submodel') submodel:string) {
    return this.carsService.getNotes(year,makes,model,submodel);
  }

    @Get('/partnum/sizecode/:year/:makes/:model:/submodel/notes')
  findPartnum(@Param('year') year: string, @Param('makes') makes:string,@Param('model') model:string,@Param('submodel') submodel:string,@Param('notes') notes:string) {
    return this.carsService.getPartNumber(year,makes,model,submodel,notes);
  }
}
