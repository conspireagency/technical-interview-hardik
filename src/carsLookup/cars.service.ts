import { Injectable } from '@nestjs/common';
import{getCarYearsResponseBody,getMakesResponseBody,getModelsResponseBody,getNotesResponseBody,getPartNumberResponseBody} from "./entities/car.entity"

@Injectable()
export class CarsService {


  async getCarYears() :Promise<getCarYearsResponseBody>{
    return {status:true,message:"Car Years Retrived Successfully", data:{}};
  }

  async getMakes(year:string) {
    return `This action returns all cars`;
  }

  async getModels(year:string,makes:string) {
    return ;
  }

  async getSubmodels(year:string,makes:string,model:string) {
    return ;
  }

  async getNotes(year:string,makes:string,model:string,submodel:string) {
    return ;
  }
   async getPartNumber(year:string,makes:string,model:string,submodel:string,notes:string) {
    return;
  }
}
