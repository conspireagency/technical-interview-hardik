import { Injectable } from '@nestjs/common';
import { AddCarResponseBoby} from './entities/addcar.entity';
import prisma from "../../prisma"



@Injectable()
export class AddcarService {
  async createCar(request):Promise<AddCarResponseBoby> {

  

    const {Year,Make,Model,Submodel,Notes,PartNumber,SizeCode}= request

  const dbsave = await prisma.car.create({
    data:{
      year:Year,
      make:Make,
      model:Model,
      submodel:Submodel,
      notes:Notes,
      pL:PartNumber,
      sizecode:SizeCode
    }
  })

  
    return {status:true,message:"Car Details Added successfully",data:dbsave};
  }


}
