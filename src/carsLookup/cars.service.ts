import { Injectable } from '@nestjs/common';
import{getCarYearsResponseBody,getMakesResponseBody,getModelsResponseBody,getNotesResponseBody,getPartNumberResponseBody} from "./entities/car.entity.ts"

@Injectable()
export class CarsService {
  getCarYears() {
    return 'This action adds a new car';
  }

  getMakes(year:string) {
    return `This action returns all cars`;
  }

  getModels(year:string,makes:string) {
    return `This action returns a #${id} car`;
  }

  getSubmodels(year:string,makes:string,model:string) {
    return `This action updates a #${id} car`;
  }

  getNotes(year:string,makes:string,model:string,submodel:string) {
    return `This action removes a #${id} car`;
  }
   getPartNumber(year:string,makes:string,model:string,submodel:string,notes:string) {
    return `This action removes a #${id} car`;
  }
}
