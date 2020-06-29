import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  add (a:number ,b:number) {
    return a + b;
  }
}
