import { Component, Input, OnInit } from '@angular/core';
import { IEntidad } from '../../interfaces/IEntidad';
import { IPaginacion } from '../../interfaces/IPaginacion';

@Component({
  selector: 'app-mas-votados-listado',
  templateUrl: './mas-votados-listado.component.html',
  styleUrls: ['./mas-votados-listado.component.css']
})
export class MasVotadosListadoComponent implements OnInit {
  
  @Input() postulantes:IEntidad[];
  paginacionConfig:IPaginacion = {
    itemsPerPage: 4,
    currentPage: 1
  };
  

  constructor() { }

  ngOnInit(): void {
  }

  getIndex( id ){
    return this.postulantes.findIndex( postulante => postulante.id == id );
  }

  actualizarRango(){
    let rango:number[] = [];
    for(let i = 0; i < this.paginacionConfig.itemsPerPage; i++){
       rango.push(i);
    }
    return rango;
  }

}
