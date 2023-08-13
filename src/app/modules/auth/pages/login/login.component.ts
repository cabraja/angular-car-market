import { Component } from '@angular/core';
import { LoginData } from 'src/app/types';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
  })

  loginResponse:string = '';
  submitDisabled:boolean = false;

  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }

  onSubmit(){
    this.submitDisabled = true;

    const {email,password} = this.loginForm.value;
    let data:LoginData;
    
    if(email && password){
      data = {
        email:email,
        password:password
  
      }
    }else{
      return;
    }

    this.authService.loginAttempt(data).subscribe(
      response => {
        this.loginResponse = '';
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      error => {
        this.submitDisabled = false;
        this.loginResponse = 'Invalid credentials. Try again.';
      }
    )
  }
}
