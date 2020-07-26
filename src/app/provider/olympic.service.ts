import { Injectable } from '@angular/core';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class OlympicService {

  constructor(private dateService: DateService) { }

  private CalcNextOlympicYear(year: number) {
    return 4 - year % 4 + year;
  }

  public getNextOlympicYear(date: Date) {

    return this.CalcNextOlympicYear(this.dateService.getYear(date));

  }

  public getFirstReiwaOlympicYear() {
    
    const firstReiwaYear = this.dateService.getFirstReiwaYear();

    for (let i = 0;true;i++) {
      if ((firstReiwaYear + i) % 4 === 0) {
        return firstReiwaYear + i;
      }
    }
  }
}
