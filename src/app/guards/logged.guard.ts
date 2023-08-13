import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!this.isTokenSet()) {
      return true; 
    } else {
      
      this.router.navigate(['/']);
      return false;
    }
  }

  private isTokenSet(){
    const token = localStorage.getItem('token');
    
    if(token){
      return true;
    }else{
      return false;
    }
  }
}
