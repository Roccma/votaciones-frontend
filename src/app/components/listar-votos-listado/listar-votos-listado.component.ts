import { Component, Input, OnInit } from '@angular/core';
import { IVoto } from '../../interfaces/IVoto';
import { IPaginacion } from '../../interfaces/IPaginacion';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-listar-votos-listado',
  templateUrl: './listar-votos-listado.component.html',
  styleUrls: ['./listar-votos-listado.component.css']
})
export class ListarVotosListadoComponent implements OnInit {
  
  @Input() votos:IVoto[] = [];

  paginacionConfig:IPaginacion = {
    itemsPerPage: 4,
    currentPage: 1
  };

  constructor( public storageService: StorageService ) { }

  ngOnInit(): void {
  }
  
  actualizarRango(){
    let rango:number[] = [];
    for(let i = 0; i < this.paginacionConfig.itemsPerPage; i++){
       rango.push(i);
    }
    return rango;
  }

}
