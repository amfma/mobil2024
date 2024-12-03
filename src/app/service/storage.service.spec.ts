import { TestBed } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule],
      providers: [{provide: Storage, useValue: {}}]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
