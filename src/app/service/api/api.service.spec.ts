import { TestBed } from '@angular/core/testing';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [provideHttpClient(), provideHttpClientTesting()],
      providers: [provideHttpClient(),provideHttpClientTesting()]
    }).compileComponents();
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
