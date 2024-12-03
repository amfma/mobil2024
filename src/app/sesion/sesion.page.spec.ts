import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionPage } from './sesion.page';
import { ActivatedRoute, provideRouter } from '@angular/router';

describe('SesionPage', () => {
  let component: SesionPage;
  let fixture: ComponentFixture<SesionPage>;
  let spyActivatedRouter: jasmine.SpyObj<ActivatedRoute>
  let active: ActivatedRoute

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPage);
    TestBed.configureTestingModule({
      imports: [provideRouter],
      providers: [{provide: provideRouter, useValue: {spyActivatedRouter}}]
    })
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
