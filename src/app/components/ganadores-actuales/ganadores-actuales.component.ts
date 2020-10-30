import { Component, Input, OnInit } from '@angular/core';
import { IEntidad } from '../../interfaces/IEntidad';

@Component({
  selector: 'app-ganadores-actuales',
  templateUrl: './ganadores-actuales.component.html',
  styleUrls: ['./ganadores-actuales.component.css']
})
export class GanadoresActualesComponent implements OnInit {
  
  @Input() ganadores:IEntidad[] = [];
  @Input() votos: number;

  constructor() { }

  ngOnInit(): void {
  }

}
