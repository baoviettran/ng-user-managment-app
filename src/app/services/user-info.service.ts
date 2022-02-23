import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  webApiUrl: string = 'http://baoviet1007-001-site1.etempurl.com/api/user/';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.webApiUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(this.webApiUrl + id);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.webApiUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(this.webApiUrl+ id, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.webApiUrl + id);
  }

}
