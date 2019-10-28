import {fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service).toBeTruthy();
  });

  it('should return sum', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service.sum(3, 8)).toBe(11);
  });

  it('should return sum async', fakeAsync(() => {
    const service: CalcService = TestBed.get(CalcService);

    service.sumAsync(5, 10).subscribe(res => {
      expect(res).toBe(15);
    });
    flush();
  }));
});
