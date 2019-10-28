import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/users';
  private user = {
    id: 1,
    name: 'Andrey',
    age: 32
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getOne(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
}
