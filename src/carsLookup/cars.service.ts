import { Injectable } from '@nestjs/common';
import{getCarYearsResponseBody,getMakesResponseBody,getModelsResponseBody,getNotesResponseBody,getPartNumberResponseBody} from "./entities/car.entity"
import prisma from "../../prisma"


@Injectable()
export class CarsService {

  async getCarYears() :Promise<getCarYearsResponseBody>{
    const caryears = await prisma.car.findMany({
      select:{
        year:true
      }
    })
    return {status:true,message:"Car Years Retrived Successfully", data:caryears};
  }

  async getMakes(request) {
    const {year} = request

    const carmakes = await prisma.car.findMany({
      where:{year:year}
    })
    return {status:true,message:`Car Makes for ${year} Retrived Successfully`, data:carmakes};
  }

  async getModels(request) {
    return ;
  }

  async getSubmodels(request) {
    return ;
  }

  async getNotes(request) {
    return ;
  }
   async getPartNumber(request) {
    return;
  }
}
