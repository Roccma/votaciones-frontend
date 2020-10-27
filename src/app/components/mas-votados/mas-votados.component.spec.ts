import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasVotadosComponent } from './mas-votados.component';

describe('MasVotadosComponent', () => {
  let component: MasVotadosComponent;
  let fixture: ComponentFixture<MasVotadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasVotadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasVotadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
