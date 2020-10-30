import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarClaveFormComponent } from './modificar-clave-form.component';

describe('ModificarClaveFormComponent', () => {
  let component: ModificarClaveFormComponent;
  let fixture: ComponentFixture<ModificarClaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarClaveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarClaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
