import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionFormComponent } from './autenticacion-form.component';

describe('AutenticacionFormComponent', () => {
  let component: AutenticacionFormComponent;
  let fixture: ComponentFixture<AutenticacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticacionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
