import { Component, OnInit } from '@angular/core';
import { VotacionesApiService } from '../../services/votaciones-api.service';
import { IEntidad } from '../../interfaces/IEntidad';
import { IVoto } from '../../interfaces/IVoto';

@Component({
  selector: 'app-listar-votos',
  templateUrl: './listar-votos.component.html',
  styleUrls: ['./listar-votos.component.css']
})
export class ListarVotosComponent implements OnInit {
  
  ranking: IEntidad[];
  maxVotos:number;
  ganadores: IEntidad[];
  votos: IVoto[];

  constructor( private votacionesApiService: VotacionesApiService ) { 
    
  }

  ngOnInit(): void {
    this.votacionesApiService.getRanking()
      .subscribe( data => {
        this.ranking = data;
        this.maxVotos = this.ranking.length > 0 ? this.ranking[0].votos : 0;
        this.filtrarGanadores( this.maxVotos );
      } );

    this.votacionesApiService.getListaVotos()
        .subscribe( data => {
          this.votos = data;
      } );
  }

  filtrarGanadores( votos: number ){
    this.ganadores = [];
    this.ganadores =  this.ranking.filter( ( postulante:IEntidad ) => postulante.votos === votos );
  }

}
