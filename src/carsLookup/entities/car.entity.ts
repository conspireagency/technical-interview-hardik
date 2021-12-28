export class getCarYearsResponseBody {
    status:boolean;
    message:string;
    data:{}
}

export class getMakesResponseBody {
    status:boolean;
    message:string;
    data:{}
}

export class getModelsResponseBody {
    status:boolean;
    message:string;
    data:{}
}

export class getSubModelsResponseBody {
    status:boolean;
    message:string;
    data:{}
}

export class getNotesResponseBody {
      status:boolean;
    message:string;
    data:{}
}

export class getPartNumberResponseBody {
    status:boolean;
    message:string;
    data:{}
}

export class CreateCarMakesDto{
    year:string;
}

export class CreateCarModelsDto{
    year:string;
    makes:string;
}

export class CreateCarSubModelsDto{
    year:string;
    makes:string;
    model:string;

}

export class CreateCarNotesDto{
    year:string
    
    makes:string;
    model:string;
    submodel:string;


}

export class CreateCarPartNumberAndSizeDto{
   year:string;
    makes:string;
    model:string;
    submodel:string;
    notes:string
}







