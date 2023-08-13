import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isTokenSet()) {
      return true; 
    } else {
      
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isTokenSet(){
    const token = localStorage.getItem('token');
    
    if(token){
      try{
        const user:any = jwt_decode(token);
        // CHECK IF TOKEN IS EXPIRED
        if (Date.now() >= user.exp * 1000) {
          return false;
        }else{
          return true;
        }
      }
      catch{
        return false;
      }
    }else{
      return false;
    }
  }
  
}
