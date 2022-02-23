import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  webApiUrl: string = 'http://baoviet1007-001-site1.etempurl.com/api/login/';

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    return this.http.post<any>(this.webApiUrl, { username, password }, {headers:{skip:"true"}})
        .pipe(map(data => {

            localStorage.removeItem('token');
            // console.log(data);
            localStorage.setItem('token', JSON.stringify(data));
            // console.log(JSON.parse(`[${localStorage.getItem('token')}]`||"").token);


        }));
}

logout() {

    localStorage.removeItem('token');

}
}
