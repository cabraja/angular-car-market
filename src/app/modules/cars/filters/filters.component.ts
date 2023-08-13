import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Make } from 'src/app/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent{

@Input() makes:Make[] = [];
@Input() selectedMake:string = '';
@Output() selectedMakeChange:EventEmitter<string> = new EventEmitter<string>();
  
selectMake(event: any) {
  this.selectedMakeChange.emit(event.target.value);
}

clearFilters(){
  this.selectedMakeChange.emit('');
}

}
