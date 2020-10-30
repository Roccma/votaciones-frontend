import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadoresActualesComponent } from './ganadores-actuales.component';

describe('GanadoresActualesComponent', () => {
  let component: GanadoresActualesComponent;
  let fixture: ComponentFixture<GanadoresActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanadoresActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanadoresActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
