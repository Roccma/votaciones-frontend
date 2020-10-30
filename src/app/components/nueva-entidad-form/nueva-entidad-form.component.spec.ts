import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEntidadFormComponent } from './nueva-entidad-form.component';

describe('NuevaEntidadFormComponent', () => {
  let component: NuevaEntidadFormComponent;
  let fixture: ComponentFixture<NuevaEntidadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaEntidadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaEntidadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
