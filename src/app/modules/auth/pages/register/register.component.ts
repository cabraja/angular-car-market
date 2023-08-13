import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['' ,[Validators.required, Validators.minLength(3), Validators.maxLength(24), Validators.pattern(/^(?=.{3,24}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    phone: ['' ,[Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
  })

  registerResponse:string = '';
  submitDisabled:boolean = false;

  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }

  onSubmit(){
    this.submitDisabled = true;
    const {username,email,password,phone} = this.registerForm.value;
    let data:RegisterData;
    
    if(username && email && password && phone){
      data = {
        username:username,
        email:email,
        phone:phone,
        password:password
      }
    }else{
      return;
    }

    this.authService.registerAttempt(data).subscribe(
      response => {
        this.router.navigate(['/login']);
      },
      error => {
        // API IS IN SERBIAN, SO ERRORS HERE ARE DISPLAYED IN SERBIAN
        const message = error?.error[0]?.errorMessage;

        if(message){
          this.registerResponse = message;
          this.submitDisabled = false;
        }else{
          this.registerResponse = 'Error on the server. Please try again later.';
          this.submitDisabled = false;
        }
        
        
      }
    )
    
    
  }
}
