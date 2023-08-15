export interface LoginData{
    email:string;
    password:string;
}

export interface RegisterData{
    username:string;
    email:string;
    phone:string;
    password:string;
}

export interface User{
    id:string;
    username: string;
    email:string;
    role:string;
}

export interface PaginatedResponse<T>{
    currentPage:number;
    pageCount:number;
    itemsPerPage:number;
    totalCount:number;
    data: T[]
}

export interface Make{
    id:number;
    name:string;
    carCount:number;
}

export interface Car{
    id:number;
    price:number;
    model:string;
    variant:string;
    mileage:number;
    power:number;
    engineCapacity:number;
    make:string;
    seller:string;
    files:Array<any>;
    followersCount:number;
}

interface Specification{
    specificationName:string;
    specificationValue:string;
}

export interface SingleCar {
    id:number;
    price:number;
    model:string;
    variant:string;
    mileage:number;
    power:number;
    engineCapacity:number;
    make:string;
    seller:{
      username:string;
      email:string;
      phone:string;
      carsCurrentlySelling:number;  
    }
    files:Array<any>;
    followersCount:number;
    specifications:Array<Specification>
}

export interface CreateCar{
    price:number;
    model:string;
    variant?:string;
    engineCapacity:number;
    mileage:number;
    power:number;
    makeId:Number;
    specificationValues:Array<{
        specificationId:number;
        specificationValueId:number;
    }>
    files:Array<{
        path:string;
    }>
}

export interface SpecificationInsert{
    id:number;
    specificationName:string;
    values:Array<{
        id:number;
        value:string | number;
    }>
}
