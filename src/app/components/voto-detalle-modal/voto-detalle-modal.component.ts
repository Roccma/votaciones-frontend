import { Component, Input, OnInit } from '@angular/core';
import { IVoto } from '../../interfaces/IVoto';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-voto-detalle-modal',
  templateUrl: './voto-detalle-modal.component.html',
  styleUrls: ['./voto-detalle-modal.component.css']
})
export class VotoDetalleModalComponent implements OnInit {
  
  voto: IVoto = null;

  constructor( public storageService: StorageService ) { 
  }

  ngOnInit(): void {
    this.voto = this.storageService.getVotoSeleccionado();
  }

}
