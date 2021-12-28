import { Injectable } from '@nestjs/common';
import{getCarYearsResponseBody,getMakesResponseBody,getModelsResponseBody,getNotesResponseBody,getPartNumberResponseBody,getSubModelsResponseBody} from "./entities/car.entity"
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



  async getMakes(request):Promise<getMakesResponseBody> {
    const {Year} = request

    const carmakes = await prisma.car.findMany({
      where:{year:Year},select:{
        make:true
      }
    })

    return {status:true,message:`Car Makes for ${Year} Retrived Successfully`, data:carmakes};
  }



  async getModels(request):Promise<getModelsResponseBody> {

      const {Year,Make} = request

    const carmodels = await prisma.car.findMany({
      where:{year:Year,make:Make},select:{
        model:true, 
      }
    })

    if(!carmodels){
       return {status:true,message:`Car Models for ${Year} and ${Make} Not Available`, data:{}};
  }
    
    return {status:true,message:`Car Models for ${Year} and ${Make} Retrived Successfully`, data:carmodels};
  }



async getSubmodels(request):Promise<getSubModelsResponseBody>{
    const {Year,Make,Model} = request

    const carsubmodels = await prisma.car.findMany({
      where:{year:Year,make:Make,model:Model},select:{
     submodel:true
      }
    })

    if(!carsubmodels){
      return {status:true,message:`Car SubModels for ${Year} , ${Make} and ${Model} Not Available`, data:{}} ;
    }
   return {status:true,message:`Car SubModels for ${Year} , ${Make} and ${Model} Retrived Successfully`, data:carsubmodels} ;
  }



  async getNotes(request) :Promise<getNotesResponseBody>{
        const {Year,Make,Model,SubModel} = request

    const carnotes = await prisma.car.findMany({
      where:{year:Year,make:Make,model:Model,submodel:SubModel},select:{
        notes:true
      }
    })

    if(!carnotes){
       return {status:true,message:`Car Notes for ${Year} , ${Make} , ${Model}and ${SubModel} Not Available`, data:{}}
  }
    
  return {status:true,message:`Car Notes for ${Year} , ${Make} , ${Model}, ${SubModel} Retrived Successfully`, data:carnotes}
  }


   async getPartNumber(request):Promise<getPartNumberResponseBody> {
         const {Year,Make,Model,Notes,SubModel} = request

    const carpartnumberandsize = await prisma.car.findMany({
      where:{year:Year,make:Make,model:Model,submodel:SubModel},select:{
       pL:true,
       sizecode:true
      }
    })
  if(!carpartnumberandsize){
    return {status:true,message:`Car Part Number + Size Code for${Year} , ${Make} , ${Model}, ${SubModel} and ${Notes} Not Available`, data:{}}
  }

    return {status:true,message:`Car Part Number + Size Code for year ${Year} , make = ${Make} , model = ${Model}, submodel = ${SubModel} and notes = ${Notes} Retrived Successfully`, data:carpartnumberandsize}
  }
}
