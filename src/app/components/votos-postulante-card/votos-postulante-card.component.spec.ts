import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotosPostulanteCardComponent } from './votos-postulante-card.component';

describe('VotosPostulanteCardComponent', () => {
  let component: VotosPostulanteCardComponent;
  let fixture: ComponentFixture<VotosPostulanteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotosPostulanteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosPostulanteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
