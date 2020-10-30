import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILogin } from '../../interfaces/ILogin';
import { NotiflixService } from '../../services/notiflix.service';
import { Router } from '@angular/router';
import sha256 from 'crypto-js/sha256';
import { VotacionesApiService } from '../../services/votaciones-api.service';
import { environment } from '../../../environments/environment.prod';
import { StorageService } from '../../services/storage.service';

declare var $:any;

@Component({
  selector: 'app-autenticacion-form',
  templateUrl: './autenticacion-form.component.html',
  styleUrls: ['./autenticacion-form.component.css']
})
export class AutenticacionFormComponent implements OnInit {
  
  usuario:ILogin = {
    email: '',
    contrasenia: ''
  };

  constructor( private notiflixService: NotiflixService,
              private votacionesApiService: VotacionesApiService,
              private storageService:StorageService,
              private router:Router ) { }

  ngOnInit(): void {
  }

  async login( autenticacionForm: NgForm ){
    this.notiflixService.showLoading("Validando credenciales");
    if( this.controlar( autenticacionForm ) ){
      let login = await this.votacionesApiService.login( autenticacionForm.form.value.email, 
                                                          sha256( autenticacionForm.form.value.contrasenia ).toString() );
      if( !login['usuario'] ){
        this.notiflixService.showAlert("Las credenciales ingresadas son incorrectas", "failure");
        this.notiflixService.hideLoading();
      }
      else{
        this.storageService.loguear( login['usuario'] );
        this.notiflixService.hideLoading();
        $('#modalAutenticacion').modal('hide');
        this.router.navigate(['/gestion', 'mas_votados']);
      }
    }
  }

  controlar( autenticacionForm:NgForm ): boolean{
    if( autenticacionForm.form.controls.email.errors && 
      autenticacionForm.form.controls.email.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado el correo electrónico", "warning");
      return false;
    }
    if( autenticacionForm.form.controls.contrasenia.errors && 
      autenticacionForm.form.controls.contrasenia.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado contraseña", "warning");
      return false;
    }

    return true;
  }

}
