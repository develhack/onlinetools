import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service).toBeTruthy();
  });

  it('should parse decimal number', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service.calculate('123').value).toEqual(123);
  });

  it('should parse binaly number', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service.calculate('0b01111011').value).toEqual(123);
  });

  it('should parse octal number', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service.calculate('0o173').value).toEqual(123);
  });

  it('should parse hexadecimal number', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service.calculate('0x7B').value).toEqual(123);
  });

  it('should calculate according to operator precedence', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    const result = service.calculate('1 + 0b10 + 4 * 5 / 0xA & 1 | ~0o5');
    expect(result.value).toEqual(-5);
  });

  it('should calculate expressions in parentheses in preference', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    const result = service.calculate('(1 + 0b10 + 4) * 5 / 0xA & (1 | ~0o5)');
    expect(result.value).toEqual(3);
  });

});
