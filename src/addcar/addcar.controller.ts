import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddcarService } from './addcar.service';
import { CreateAddcarDto } from './dto/create-addcar.dto';
import { UpdateAddcarDto } from './dto/update-addcar.dto';

@Controller('addcar')
export class AddcarController {
  constructor(private readonly addcarService: AddcarService) {}

  @Post()
  create(@Body() createAddcarDto: CreateAddcarDto) {
    return this.addcarService.create(createAddcarDto);
  }

  @Get()
  findAll() {
    return this.addcarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addcarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddcarDto: UpdateAddcarDto) {
    return this.addcarService.update(+id, updateAddcarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addcarService.remove(+id);
  }
}
