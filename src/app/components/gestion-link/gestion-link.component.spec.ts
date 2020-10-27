import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLinkComponent } from './gestion-link.component';

describe('GestionLinkComponent', () => {
  let component: GestionLinkComponent;
  let fixture: ComponentFixture<GestionLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
