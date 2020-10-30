import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoDetalleModalComponent } from './voto-detalle-modal.component';

describe('VotoDetalleModalComponent', () => {
  let component: VotoDetalleModalComponent;
  let fixture: ComponentFixture<VotoDetalleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotoDetalleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotoDetalleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
