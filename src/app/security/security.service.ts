import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUserAuth } from './app-user-auth';
import { UserRegister } from './model/user-register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegisterResponse } from './model/user-register-response';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) { 

  }

  public Register(user: UserRegister) : Observable<UserRegisterResponse>
  {
    return this.http.post<UserRegisterResponse>(
      environment.webApiRoot + "register", 
      user, 
      httpOptions);
  }
}
