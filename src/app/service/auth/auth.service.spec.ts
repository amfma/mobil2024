import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let AuthServiceSpy;

  beforeEach(() => {
    AuthServiceSpy = jasmine.createSpyObj('AuthService', {
      isLogin : false,
      role : 'PROFESOR',
      name: 'Juan Hernandez',
      id: 1
    })
    TestBed.configureTestingModule({});
    service = new AuthService(AuthServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
