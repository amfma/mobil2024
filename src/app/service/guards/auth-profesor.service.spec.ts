import { TestBed } from '@angular/core/testing';

import { AuthProfesorService } from './auth-profesor.service';

describe('AuthProfesorService', () => {
  let service: AuthProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
