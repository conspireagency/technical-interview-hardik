import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddcarService } from './addcar.service';
import { CreateAddcarDto } from './dto/create-addcar.dto';


@Controller('addcar')
export class AddcarController {
  constructor(private readonly addcarService: AddcarService) {}
  @Post()
  create(@Body() request: CreateAddcarDto) {
  
    return this.addcarService.createCar(request);
  }


}
