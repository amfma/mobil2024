import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorPage } from './profesor.page';
import { AuthService } from '../service/auth/auth.service';
import { ApiService } from '../service/api/api.service';
import { Router } from '@angular/router';

describe('ProfesorPage', () => {
  let component: ProfesorPage;
  let fixture: ComponentFixture<ProfesorPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let mockRouter: jasmine.SpyObj<Router>

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['id'])
    mockRouter = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    await TestBed.configureTestingModule({
      declarations: [ProfesorPage],
      providers: [{provide: AuthService, useValue: authServiceSpy},
        {provide: Router, useValue: mockRouter},
        {provide: ApiService, useValue: apiServiceSpy}
      ]
    })
    fixture = TestBed.createComponent(ProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal window', ()=>{
    const modal = component.abrirModal(true);
    expect(modal).toBeTrue()
  })
});
