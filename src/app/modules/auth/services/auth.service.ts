import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { LoginData, RegisterData } from 'src/app/types';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginAttempt(data: LoginData):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/auth`, data, { headers });
  }

  registerAttempt(data:RegisterData):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/register`, data, {headers});
  }
}
