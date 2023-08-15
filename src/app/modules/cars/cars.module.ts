import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { FiltersComponent } from './filters/filters.component';
import { ListingsComponent } from './listings/listings.component';
import { SingleCarComponent } from './single-car/single-car.component';
import { RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MyCarsComponent } from './my-cars/my-cars.component';


@NgModule({
  declarations: [
    HomepageComponent,
    FiltersComponent,
    ListingsComponent,
    SingleCarComponent,
    AddCarComponent,
    MyCarsComponent
  ],
  exports:[
    HomepageComponent,
    SingleCarComponent,
    AddCarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CarsModule { }
