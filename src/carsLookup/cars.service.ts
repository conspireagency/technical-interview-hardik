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
    const {Year} = request

    const carmakes = await prisma.car.findMany({
      where:{year:Year},select:{
        make:true
      }
    })

    return {status:true,message:`Car Makes for ${Year} Retrived Successfully`, data:carmakes};
  }



  async getModels(request) {

      const {Year,Makes} = request

    const carmodels = await prisma.car.findMany({
      where:{year:Year,make:Makes},select:{
        model:true, 
      }
    })

    if(!carmodels){
       return {status:true,message:`Car Models for ${Year} and ${Makes} Not Available`, data:{}};
  }
    
    return {status:true,message:`Car Models for ${Year} and ${Makes} Retrived Successfully`, data:carmodels};
  }



async getSubmodels(request){
    const {Year,Makes,Models} = request

    const carsubmodels = await prisma.car.findMany({
      where:{year:Year,make:Makes,model:Models},select:{
     submodel:true
      }
    })

    if(!carsubmodels){
      return {status:true,message:`Car SubModels for ${Year} , ${Makes} and ${Models} Not Available`, data:{}} ;
    }
   return {status:true,message:`Car SubModels for ${Year} , ${Makes} and ${Models} Retrived Successfully`, data:carsubmodels} ;
  }



  async getNotes(request) {
        const {Year,Makes,Models,SubModels} = request

    const carnotes = await prisma.car.findMany({
      where:{year:Year,make:Makes,model:Models,submodel:SubModels},select:{
        notes:true
      }
    })

    if(!carnotes){
       return {status:true,message:`Car Notes for ${Year} , ${Makes} , ${Models}and ${SubModels} Not Available`, data:{}}
  }
    
  return {status:true,message:`Car Notes for ${Year} , ${Makes} , ${Models}, ${SubModels} Retrived Successfully`, data:carnotes}
  }


   async getPartNumber(request) {
         const {Year,Makes,Models,Notes,SubModels} = request

    const carpartnumberandsize = await prisma.car.findMany({
      where:{year:Year,make:Makes,model:Models,submodel:SubModels},select:{
       pL:true,
       sizecode:true
      }
    })
  if(!carpartnumberandsize){
    return {status:true,message:`Car Part Number + Size Code for${Year} , ${Makes} , ${Models}, ${SubModels} and ${Notes} Not Available`, data:{}}
  }

    return {status:true,message:`Car Part Number + Size Code for ${Year} , ${Makes} , ${Models}, ${SubModels} and ${Notes} Retrived Successfully`, data:carpartnumberandsize}
  }
}
