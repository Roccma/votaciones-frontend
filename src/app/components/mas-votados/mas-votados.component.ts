import { Component, OnInit } from '@angular/core';
import { VotacionesApiService } from '../../services/votaciones-api.service';
import { IEntidad } from '../../interfaces/IEntidad';
import { NotiflixService } from '../../services/notiflix.service';

@Component({
  selector: 'app-mas-votados',
  templateUrl: './mas-votados.component.html',
  styleUrls: ['./mas-votados.component.css']
})
export class MasVotadosComponent implements OnInit {

  ranking:IEntidad[] = [];

  inProgress:boolean;

  constructor( private votacionesApiService: VotacionesApiService,
              private notiflixService: NotiflixService ) { 
     this.inProgress = true;           
  }

  ngOnInit(): void {
  
    this.votacionesApiService.getRanking()
      .subscribe( data => {
        this.ranking = data;
        this.inProgress = false;
      } );

  }

}
