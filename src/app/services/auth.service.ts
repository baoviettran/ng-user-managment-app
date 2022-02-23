import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  public getTokenString(): string {
    return JSON.parse(this.getToken()||"").token;
    // return "";
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    console.log(token);
    return !this.jwtHelper.isTokenExpired(token || undefined);
  }

}
