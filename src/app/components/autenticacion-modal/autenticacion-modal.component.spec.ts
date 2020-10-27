import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionModalComponent } from './autenticacion-modal.component';

describe('AutenticacionModalComponent', () => {
  let component: AutenticacionModalComponent;
  let fixture: ComponentFixture<AutenticacionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticacionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
