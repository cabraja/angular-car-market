import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { FiltersComponent } from './filters/filters.component';
import { ListingsComponent } from './listings/listings.component';
import { SingleCarComponent } from './single-car/single-car.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomepageComponent,
    FiltersComponent,
    ListingsComponent,
    SingleCarComponent
  ],
  exports:[
    HomepageComponent,
    SingleCarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CarsModule { }
