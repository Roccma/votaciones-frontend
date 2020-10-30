import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoCardComponent } from './voto-card.component';

describe('VotoCardComponent', () => {
  let component: VotoCardComponent;
  let fixture: ComponentFixture<VotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
