import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public getYear(date: Date) {

    return date.getFullYear();

  }

  public getYearAsync(date: Date) {

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(date.getFullYear());
      }, 1000);
    });

  }

  public getFirstReiwaYear():number {

    // TODO 実装途中
    return 0;
  }
}
