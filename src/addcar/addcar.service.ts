import { Injectable } from '@nestjs/common';
import { CreateAddcarDto } from './dto/create-addcar.dto';
import { UpdateAddcarDto } from './dto/update-addcar.dto';

@Injectable()
export class AddcarService {
  create(createAddcarDto: CreateAddcarDto) {
    return 'This action adds a new addcar';
  }

  findAll() {
    return `This action returns all addcar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addcar`;
  }

  update(id: number, updateAddcarDto: UpdateAddcarDto) {
    return `This action updates a #${id} addcar`;
  }

  remove(id: number) {
    return `This action removes a #${id} addcar`;
  }
}
