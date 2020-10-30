import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVotosListadoComponent } from './listar-votos-listado.component';

describe('ListarVotosListadoComponent', () => {
  let component: ListarVotosListadoComponent;
  let fixture: ComponentFixture<ListarVotosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVotosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVotosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
