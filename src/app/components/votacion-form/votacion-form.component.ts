import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEntidad } from '../../interfaces/IEntidad';
import { NotiflixService } from '../../services/notiflix.service';
import { IVotacion } from '../../interfaces/IVotacion';
import { VotacionesApiService } from '../../services/votaciones-api.service';

@Component({
  selector: 'app-votacion-form',
  templateUrl: './votacion-form.component.html',
  styleUrls: ['./votacion-form.component.css']
})
export class VotacionFormComponent implements OnInit {
  

  postulantes:IEntidad[] = null;

  voto:IVotacion = {
    documento: "",
    postulante: 0
  };


  constructor( private notiflixService: NotiflixService,
              private votacionApiService: VotacionesApiService ) { 
    this.notiflixService.showLoading("Por favor, espere un momento...");
  }

  ngOnInit() {
    this.votacionApiService.getPostulantes()
      .subscribe( data => {
        this.postulantes = data;
        this.voto['postulante'] = this.postulantes[0].id;
        this.notiflixService.hideLoading();
      } );
  }

  async votar( votoForm:NgForm ){
    
    this.notiflixService.showLoading("Validando datos ingresados");
    
    if( this.controlar( votoForm ) ){
      let entidad = await this.votacionApiService.verificarDocumento( votoForm.form.value.documento );
      if( !entidad['entidad'] ){
        this.notiflixService.showAlert("El documento ingresado no le pertenece a ninguna persona registrada", "failure");
        this.notiflixService.hideLoading();
        return;
      }
  
      let voto = await this.votacionApiService.verificarVotoDoble( votoForm.form.value.documento );
      if( voto['voto'] ){
        this.notiflixService.showAlert("El documento ingresado le pertenece a una persona que ya ha votado", "failure");
        this.notiflixService.hideLoading();
        return;
      }

      this.votacionApiService.votar( votoForm.form.value.documento, votoForm.form.value.postulante )
        .subscribe( data => {
          if( data["code"] == 200 ){
            this.notiflixService.showSuccess('¡Éxito!', 'Su voto ha sido ingresado de manera correcto', 'Entendido');
            this.notiflixService.hideLoading();
          }
        } );
    }
  }

  controlar( votoForm:NgForm ){
    if( votoForm.form.controls.documento.errors && 
      votoForm.form.controls.documento.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado documento", "warning");
      this.notiflixService.hideLoading();
      return false;
    }
    if( votoForm.form.value.documento.length < 8 ){
      this.notiflixService.showAlert("El documento ingresado no es válido", "warning");
      this.notiflixService.hideLoading();
      return false;
    }

    return true;
  }

}
