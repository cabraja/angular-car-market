import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './modules/cars/homepage/homepage.component';
import { LoggedGuard } from './guards/logged.guard';
import { SingleCarComponent } from './modules/cars/single-car/single-car.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoggedGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [LoggedGuard],
    component: RegisterComponent
  },
  { path: 'car/:id',
    canActivate: [AuthGuard],
    component: SingleCarComponent
  },
  { path: '',
    canActivate: [AuthGuard],
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
