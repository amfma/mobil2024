import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { AuthService } from '../service/auth/auth.service';
import { ApiService } from '../service/api/api.service';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let storage: StorageService;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['id'])
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['getLogin', 'login'])
    TestBed.configureTestingModule({
      imports: [IonicStorageModule],
      providers: [{provide: StorageService, useValue: {}}, {provide: HttpClient, useValue: {}}]
    })
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});import { StorageService } from '../service/storage.service';
import { HttpClient } from '@angular/common/http';

