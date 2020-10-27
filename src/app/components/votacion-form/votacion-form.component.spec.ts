import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacionFormComponent } from './votacion-form.component';

describe('VotacionFormComponent', () => {
  let component: VotacionFormComponent;
  let fixture: ComponentFixture<VotacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotacionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
