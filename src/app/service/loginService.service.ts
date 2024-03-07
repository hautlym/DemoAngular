import { LoginRequest } from './../model/loginRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  public Login(request: LoginRequest): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    };
    // Use the options parameter to set headers
    const options = { headers : headers };

    // Convert data to JSON string
    const body = JSON.stringify(request);
    var kq =  this.http.post(
      'https://localhost:7095/api/LoginControllercs',
      body,
      options
    );
    return kq;
  }
}
