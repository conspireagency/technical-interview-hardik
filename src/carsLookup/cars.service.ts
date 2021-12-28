import { Injectable } from '@nestjs/common';
import{getCarYearsResponseBody,getMakesResponseBody,getModelsResponseBody,getNotesResponseBody,getPartNumberResponseBody} from "./entities/car.entity"

@Injectable()
export class CarsService {
  getCarYears() {
    return 'This action adds a new car';
  }

  getMakes(year:string) {
    return `This action returns all cars`;
  }

  getModels(year:string,makes:string) {
    return ;
  }

  getSubmodels(year:string,makes:string,model:string) {
    return ;
  }

  getNotes(year:string,makes:string,model:string,submodel:string) {
    return ;
  }
   getPartNumber(year:string,makes:string,model:string,submodel:string,notes:string) {
    return;
  }
}
