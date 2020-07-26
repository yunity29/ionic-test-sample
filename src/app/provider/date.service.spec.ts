import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {

    // テスト環境の作成とサービスの注入
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getYear', () => {

    it(`'2018/5/9' 2018 `, () => {
      expect(service.getYear(new Date('2018/5/9'))).toEqual(2018);
    });
    it(`'2020/1/1' 2020 `, () => {
      expect(service.getYear(new Date('2020/1/1'))).toEqual(2020);
    });
    it(`'2020/12/31' 2020 `, () => {
      expect(service.getYear(new Date('2020/12/31'))).toEqual(2020);
    });
    it(`'2050/12/31' 2050 `, () => {
      expect(service.getYear(new Date('2050/12/31'))).toEqual(2050);
    });
    it(`'1951/12/31' 1951 `, () => {
      expect(service.getYear(new Date('1951/12/31'))).toEqual(1951);
    });

  });
  
  describe('getYearAsync', () => {

    it(`'2018/5/9' 2018 `, async () => {
      const result = await service.getYearAsync(new Date('2018/5/9'));
      expect(result).toEqual(2018);
    });
    it(`'2020/1/1' 2020 `, async () => {
      const result = await service.getYearAsync(new Date('2020/1/1'));
      expect(result).toEqual(2020);
    });
    it(`'2020/12/31' 2020 `, async () => {
      const result = await service.getYearAsync(new Date('2020/12/31'));
      expect(result).toEqual(2020);
    });
    it(`'2050/12/31' 2050 `, async () => {
      const result = await service.getYearAsync(new Date('2050/12/31'));
      expect(result).toEqual(2050);
    });
    it(`'1951/12/31' 1951 `, async () => {
      const result = await service.getYearAsync(new Date('1951/12/31'));
      expect(result).toEqual(1951);
    });
   
  });
});
