import { Component, Input, OnInit } from '@angular/core';
import { IEntidad } from '../../interfaces/IEntidad';

@Component({
  selector: 'app-votos-postulante-card',
  templateUrl: './votos-postulante-card.component.html',
  styleUrls: ['./votos-postulante-card.component.css']
})
export class VotosPostulanteCardComponent implements OnInit {
  
  @Input() postulante:IEntidad;
  @Input() posicion:number;

  constructor() { }

  ngOnInit(): void {
  }

}
