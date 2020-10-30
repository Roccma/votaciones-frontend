import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IContrasenia } from '../../interfaces/IContrasenia';
import { NotiflixService } from '../../services/notiflix.service';
import { StorageService } from '../../services/storage.service';
import { VotacionesApiService } from '../../services/votaciones-api.service';
import { IEntidad } from '../../interfaces/IEntidad';
import sha256 from 'crypto-js/sha256';

@Component({
  selector: 'app-modificar-clave-form',
  templateUrl: './modificar-clave-form.component.html',
  styleUrls: ['./modificar-clave-form.component.css']
})
export class ModificarClaveFormComponent implements OnInit {
  
  contrasenia:IContrasenia = {
    actual: '',
    nueva: '',
    confirmacion: ''
  };

  constructor( private notiflixService: NotiflixService,
              private storageService: StorageService,
              private votacionApiService: VotacionesApiService ) { }

  ngOnInit(): void {
  }

  async cambiarClave( cambiarClaveForm: NgForm ){
    this.notiflixService.showLoading("Validando cambio de contraseña");
    if( this.controlar( cambiarClaveForm ) ){
      let usuarioActual:IEntidad = this.storageService.getLogueado();
      let login = await this.votacionApiService.login( usuarioActual.email, 
                                                        sha256( cambiarClaveForm.form.value.actual ).toString() );
      if( login['usuario'] ){
        let cambio = await this.votacionApiService.cambiarClave( usuarioActual.id, sha256( cambiarClaveForm.form.value.nueva ).toString() );
        if( cambio['code'] === 200 ){
          this.notiflixService.showSuccess('¡Éxito!', 'Su clave ha sido modificada de manera correcta', 'Entendido');
          this.contrasenia = {
            actual: '',
            nueva : '',
            confirmacion: ''  
          };
          cambiarClaveForm.reset();
          this.notiflixService.hideLoading();
        }
        else{
          this.notiflixService.showAlert("Ha ocurrido un error al intentar cambiar la contraseña", "failure");
          this.notiflixService.hideLoading();
        }
      }
      else{
        this.notiflixService.showAlert("La contraseña actual es incorrecta", "failure");
        this.notiflixService.hideLoading();
      }

    }
  }

  controlar( cambiarClaveForm:NgForm ): boolean{
    if( cambiarClaveForm.form.controls.actual.errors && 
      cambiarClaveForm.form.controls.actual.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado la contraseña actual", "warning");
      this.notiflixService.hideLoading();
      return false;
    }

    if( cambiarClaveForm.form.controls.nueva.errors && 
      cambiarClaveForm.form.controls.nueva.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado la contraseña nueva", "warning");
      this.notiflixService.hideLoading();
      return false;
    }

    if( cambiarClaveForm.form.controls.confirmacion.errors && 
      cambiarClaveForm.form.controls.confirmacion.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado confirmado la contraseña nueva", "warning");
      this.notiflixService.hideLoading();
      return false;
    }

    if( cambiarClaveForm.form.value.nueva != cambiarClaveForm.form.value.confirmacion ){
      this.notiflixService.showAlert("La contraseña nueva no coincide con su confirmación", "warning");
      this.notiflixService.hideLoading();
      return false;
    }

    return true;
  }

}
