import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionPage } from './sesion.page';
import { ActivatedRoute } from '@angular/router';

describe('SesionPage', () => {
  let component: SesionPage;
  let fixture: ComponentFixture<SesionPage>;
  let spyActivatedRouter: jasmine.SpyObj<ActivatedRoute>

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
