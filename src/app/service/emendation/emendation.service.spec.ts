import { TestBed } from '@angular/core/testing';

import { EmendationService } from './emendation.service';
import { HttpClient } from '@angular/common/http';

describe('EmendationService', () => {
  let httpClientSpy;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
      ]
    });
  });

  it('should be created', () => {
    const service: EmendationService = TestBed.get(EmendationService);
    expect(service).toBeTruthy();
  });
});
