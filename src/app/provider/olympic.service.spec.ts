import { TestBed } from '@angular/core/testing';

import { OlympicService } from './olympic.service';
import { DateService } from './date.service';

describe('OlympicService', () => {
  let service: OlympicService;

  describe('create', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(OlympicService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  })

  describe('getNextOlympicYear', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(OlympicService);
    });

    it(`'2018/5/9' 2020 `, () => {
      expect(service.getNextOlympicYear(new Date('2018/5/9'))).toEqual(2020);
    });
    it(`'2019/5/9' 2020 `, () => {
      expect(service.getNextOlympicYear(new Date('2019/5/9'))).toEqual(2020);
    });
    it(`'2020/5/9' 2024 `, () => {
      expect(service.getNextOlympicYear(new Date('2020/5/9'))).toEqual(2024);
    });
    it(`'2021/5/9' 2024 `, () => {
      expect(service.getNextOlympicYear(new Date('2021/5/9'))).toEqual(2024);
    });
    it(`'2023/5/9' 2024 `, () => {
      expect(service.getNextOlympicYear(new Date('2023/5/9'))).toEqual(2024);
    });
    it(`'2024/5/9' 2028 `, () => {
      expect(service.getNextOlympicYear(new Date('2024/5/9'))).toEqual(2028);
    });
    it(`'1951/5/9' 1952 `, () => {
      expect(service.getNextOlympicYear(new Date('1951/5/9'))).toEqual(1952);
    });

  });

  describe('getFirstReiwaOlympicYear', () => {
    let olympicService: OlympicService;
    let dateServiceSpy: jasmine.SpyObj<DateService>;

    beforeEach(() => {
      const spy = jasmine.createSpyObj('DateService', ['getFirstReiwaYear']);

      TestBed.configureTestingModule({
        providers: [
          { provide: DateService, useValue: spy }
        ]
      });
      olympicService = TestBed.inject(OlympicService);
      dateServiceSpy = TestBed.inject(DateService) as jasmine.SpyObj<DateService>;;

    });

    // getFirstReiwaYearの返却値を2019に設定してテストを実行します。
    it(`stab:2019 toEqual(2020)`, () => {
      const stubValue = 2019;
      dateServiceSpy.getFirstReiwaYear.and.returnValue(stubValue);

      expect(olympicService.getFirstReiwaOlympicYear()).toEqual(2020);
    });

  });
});

