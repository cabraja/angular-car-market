import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Make,Car } from 'src/app/types';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  makes:Make[] = [];
  cars:Car[] = [];
  selectedMake:string = '';

  constructor(private carService:CarService){}

  ngOnInit(): void {
    this.getMakes();
    this.getCars(this.selectedMake)
  }

  onSelectedMakeChange(newSelectedMake: string) {
    this.selectedMake = newSelectedMake;
    this.getCars(this.selectedMake);
  }

  getMakes(){
    this.carService.getMakes().subscribe(
      response => {
        this.makes = response.data;
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  getCars(keyword:string){
    this.carService.getCars(keyword).subscribe(
      response => {
        this.cars = response.data;
        
      },
      error => {
        console.log(error);
        
      }
    )
  }
}
