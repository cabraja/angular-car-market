import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  user:User|null = null;
  showMenu:boolean = false;

  constructor(private router:Router){}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if(token){
      try {
        let data:any = jwt_decode(token);
        
        this.user = {
          username: data.Username,
          id: data.Id,
          email: data.Email,
          role: data.Role
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }

  handleMenuClick(){
    this.showMenu = !this.showMenu;
  }

  handleLogout(){
    localStorage.clear();
    this.showMenu = false;
    this.router.navigate(['/login']);
  }
}
