import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ispit';

  constructor (private router:Router){}

  public displayNavbar(){
    if(this.router.url == '/login' || this.router.url == '/register'){
      return false;
    }
    else{
      return true;
    }
  }
}
