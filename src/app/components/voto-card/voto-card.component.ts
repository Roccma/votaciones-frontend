import { Component, Input, OnInit } from '@angular/core';
import { IVoto } from '../../interfaces/IVoto';
import { VotacionesApiService } from '../../services/votaciones-api.service';
import { NotiflixService } from '../../services/notiflix.service';
import { StorageService } from '../../services/storage.service';

declare var $:any;

@Component({
  selector: 'app-voto-card',
  templateUrl: './voto-card.component.html',
  styleUrls: ['./voto-card.component.css']
})
export class VotoCardComponent implements OnInit {
  
  @Input() voto:IVoto;
  votoSeleccionado:IVoto;
  
  constructor( private votacionesApiService: VotacionesApiService,
              private notiflixService: NotiflixService,
              private storageService: StorageService) { }

  ngOnInit(): void {
  }

  verDetalle( id: number ){
    this.notiflixService.showLoading("Cargando información del voto");
    this.votacionesApiService.getDetalleVoto( id )
      .subscribe( data => {
        this.votoSeleccionado = data;
        this.storageService.setVotoSeleccionado( this.votoSeleccionado );
        this.storageService.votoSeleccionado = this.storageService.getVotoSeleccionado();
        this.notiflixService.hideLoading();
        $('#modalVotoDetalle').modal('show');
      } );
  }

}
