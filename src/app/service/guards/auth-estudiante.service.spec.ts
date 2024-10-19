import { TestBed } from '@angular/core/testing';

import { AuthEstudianteService } from './auth-estudiante.service';

describe('AuthEstudianteService', () => {
  let service: AuthEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
