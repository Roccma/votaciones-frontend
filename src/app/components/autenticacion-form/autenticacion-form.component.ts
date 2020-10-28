import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILogin } from '../../interfaces/ILogin';
import { NotiflixService } from '../../services/notiflix.service';
import { Router } from '@angular/router';

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
              private router:Router ) { }

  ngOnInit(): void {
  }

  login( autenticacionForm: NgForm ){
    if( this.controlar( autenticacionForm ) ){
      $('#modalAutenticacion').modal('hide');
      this.router.navigate(['/gestion']);
    }
  }

  controlar( autenticacionForm:NgForm ): boolean{
    if( autenticacionForm.form.controls.email.errors && 
      autenticacionForm.form.controls.email.errors['required'] ){
      this.notiflixService.showAlert("El documento no puede estar vacío", "warning");
      return false;
    }
    if( autenticacionForm.form.controls.contrasenia.errors && 
      autenticacionForm.form.controls.contrasenia.errors['required'] ){
      this.notiflixService.showAlert("La contraseña no puede estar vacía", "warning");
      return false;
    }

    return true;
  }

}
