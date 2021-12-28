import { PartialType } from '@nestjs/mapped-types';
import { CreateAddcarDto } from './create-addcar.dto';

export class UpdateAddcarDto extends PartialType(CreateAddcarDto) {}
