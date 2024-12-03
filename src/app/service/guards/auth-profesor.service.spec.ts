import { TestBed } from '@angular/core/testing';

import { AuthProfesorService } from './auth-profesor.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';

describe('AuthProfesorService', () => {
  let service: AuthProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule],
      providers: [{provide: StorageService, useValue: {}}]
    }).compileComponents();
    service = TestBed.inject(AuthProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
