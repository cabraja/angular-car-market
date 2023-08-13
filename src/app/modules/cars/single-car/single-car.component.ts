import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  SingleCar } from 'src/app/types';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit{

  car:SingleCar | null = null;

  constructor(private route:ActivatedRoute, private carService:CarService){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.getCar(id);
      }
    });
  }

  getCar(id:string){
    this.carService.getSingleCar(id).subscribe(
      response => {
        this.car = response;
        console.log(this.car);
        
         
      },
      error => {
        console.log(error);
        
      }
    )
  }
}
