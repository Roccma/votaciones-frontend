import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasVotadosListadoComponent } from './mas-votados-listado.component';

describe('MasVotadosListadoComponent', () => {
  let component: MasVotadosListadoComponent;
  let fixture: ComponentFixture<MasVotadosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasVotadosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasVotadosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
