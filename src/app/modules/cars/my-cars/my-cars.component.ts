import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/types';
import { CarService } from '../services/car.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit{
  cars:Car[] = [];
  
  constructor(private carService:CarService){}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    const username:string = this.getUsername();

    this.carService.getCars(username).subscribe(
      response => {
        this.cars = response.data;
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  deleteCar(id:number){
    if(confirm('Are you sure you want to delete this car?')){
      this.carService.deleteCar(id).subscribe(
        response => {
          this.getCars();
          
        },
        error => {
          console.log(error);
          
        }
      )
    }
  }

  getUsername():string{
    const token = localStorage.getItem('token');

    if(token){
      try{
        const user:any = jwt_decode(token);
        return user.Username;
        
      }
      catch{
        return '';
      }
    }

    return '';
  }
}
