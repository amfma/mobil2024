import { TestBed } from '@angular/core/testing';

import { AuthEstudianteService } from './auth-estudiante.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';

describe('AuthEstudianteService', () => {
  let service: AuthEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule],
      providers: [{provide: StorageService, useValue: {}}]
    }).compileComponents();
    service = TestBed.inject(AuthEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
