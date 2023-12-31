import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Make,PaginatedResponse,Car, SingleCar, SpecificationInsert, CreateCar } from 'src/app/types';
import { Token } from '@angular/compiler';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`
});

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getMakes():Observable<PaginatedResponse<Make>>{
    return this.http.get<PaginatedResponse<Make>>(`${environment.apiUrl}/makes`, {headers});
  }

  getCars(keyword:string):Observable<PaginatedResponse<Car>>{
    return this.http.get<PaginatedResponse<Car>>(`${environment.apiUrl}/cars?keyword=${keyword}`, {headers});
  }

  getSingleCar(id:string):Observable<SingleCar>{
    return this.http.get<SingleCar>(`${environment.apiUrl}/cars/${id}`, {headers});
  }

  getSpecifications():Observable<SpecificationInsert[]>{
    return this.http.get<SpecificationInsert[]>(`${environment.apiUrl}/specifications`, {headers});
  }

  createCar(data:CreateCar):Observable<any>{
    return this.http.post<CreateCar>(`${environment.apiUrl}/cars`, data, {headers});
  }

  deleteCar(id:number):Observable<any>{
    return this.http.delete<number>(`${environment.apiUrl}/cars/${id}`, {headers});
  }
}
