import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPostulante } from '../../interfaces/IPostulante';
import { NotiflixService } from '../../services/notiflix.service';
import { IVotacion } from '../../interfaces/IVotacion';

@Component({
  selector: 'app-votacion-form',
  templateUrl: './votacion-form.component.html',
  styleUrls: ['./votacion-form.component.css']
})
export class VotacionFormComponent implements OnInit {
  

  postulantes:IPostulante[] = [
    { 
      id : 1,
      nombre: "Mauro",
      apellido: "Rocca"
    },
    { 
      id : 2,
      nombre: "Pablo",
      apellido: "Perez"
    }
  ];

  voto:IVotacion = {
    documento: "",
    postulante: this.postulantes[0].id
  };


  constructor( private notiflixService: NotiflixService ) { 
  }

  ngOnInit(): void {
  }

  votar( votoForm:NgForm ): void{
    this.controlar( votoForm );
  }

  controlar( votoForm:NgForm ): void{
    if( votoForm.form.controls.documento.errors && 
      votoForm.form.controls.documento.errors['required'] ){
      this.notiflixService.showAlert("El documento no puede estar vacío", "warning");
      return;
    }
    if( votoForm.form.value.documento.length < 8 ){
      this.notiflixService.showAlert("El documento ingresado es inválido", "warning");
      return;
    }
  }

}
