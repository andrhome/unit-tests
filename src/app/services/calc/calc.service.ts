import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  sum(a: number, b: number): number {
    return a + b;
  }

  sumAsync(a: number, b: number): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(a + b);
      }, 3000);
    });
  }
}
