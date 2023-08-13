import { Component,Input } from '@angular/core';
import { Car } from 'src/app/types';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent {
  @Input() cars:Car[] = [];
}
