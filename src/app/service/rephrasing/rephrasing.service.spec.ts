import { TestBed } from '@angular/core/testing';

import { RephrasingService } from './rephrasing.service';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from '../translation/translation.service';

describe('RephrasingService', () => {
  let httpClientSpy, translationServiceSpy;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    translationServiceSpy = jasmine.createSpyObj('TranslationService', ['translate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: TranslationService, useValue: translationServiceSpy },
      ]
    });
  });

  it('should be created', () => {
    const service: RephrasingService = TestBed.get(RephrasingService);
    expect(service).toBeTruthy();
  });
});
