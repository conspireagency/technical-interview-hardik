import { Module } from '@nestjs/common';
import { AddcarService } from './addcar.service';
import { AddcarController } from './addcar.controller';

@Module({
  controllers: [AddcarController],
  providers: [AddcarService]
})
export class AddcarModule {}
