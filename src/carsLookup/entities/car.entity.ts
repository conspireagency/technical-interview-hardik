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
    Year:string;
}

export class CreateCarModelsDto{
    Year:string;
    Make:string;
}

export class CreateCarSubModelsDto{
    Year:string;
    Make:string;
    Model:string;

}

export class CreateCarNotesDto{
    Year:string
    Make:string;
    Model:string;
    Submodel:string;


}

export class CreateCarPartNumberAndSizeDto{
   Year:string;
    Make:string;
    Model:string;
    Submodel:string;
    Notes:string
}







