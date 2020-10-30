import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEntidad } from '../../interfaces/IEntidad';
import { NotiflixService } from '../../services/notiflix.service';
import { VotacionesApiService } from '../../services/votaciones-api.service';

@Component({
  selector: 'app-nueva-entidad-form',
  templateUrl: './nueva-entidad-form.component.html',
  styleUrls: ['./nueva-entidad-form.component.css']
})
export class NuevaEntidadFormComponent implements OnInit {
  
  entidad:IEntidad = {
    documento: '',
    es_postulante: false,
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    dob: this.getToday(),
    sexo: 'f'
  };

  tipos:any[] = [
    {
      value: false,
      text: "Votante",
      id: "votante"
    },
    {
      value: true,
      text: "Postulante",
      id: "postulante"
    }
  ];

  sexos:any[] = [
    {
      value: 'f',
      text: "Femenino"
    },
    {
      value: 'm',
      text: "Masculino"
    }
  ];

  constructor( private notiflixService: NotiflixService,
              private votacionesApiService: VotacionesApiService ) { }

  ngOnInit(): void {
  }

  getToday(): string{
    let today = new Date();
    return `${ today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate() }`;
  }

  async agregarEntidad( nuevaEntidadForm: NgForm ){
    this.notiflixService.showLoading("Validando datos");
    if( this.controlar( nuevaEntidadForm ) ){
      let entidad = await this.votacionesApiService.verificarDocumento( nuevaEntidadForm.form.value.documento );

      if( !entidad['entidad'] ){
        this.votacionesApiService.agregarEntidad( nuevaEntidadForm.form.value )
          .subscribe( data => {
            if( data === 200 ){
              this.notiflixService.showSuccess('¡Éxito!', 'Se ha agregado a la persona de manera correcta', 'Entendido');
              this.notiflixService.hideLoading();
            }
            else{
              this.notiflixService.showAlert("Ha ocurrido un error al intentar agregar la nueva persona", "failure");
              this.notiflixService.hideLoading();
            }
          } );
        
      }
      else{
        this.notiflixService.showAlert("Ya existe un perfil con el documento ingresado", "failure");
        this.notiflixService.hideLoading();
      }
    }
    else{
      this.notiflixService.hideLoading();
    }
  }

  controlar( nuevaEntidadForm: NgForm ){
    if( nuevaEntidadForm.form.controls.documento.errors && 
      nuevaEntidadForm.form.controls.documento.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado el documento de la nueva entidad", "warning");
      return false;
    }
    
    if( nuevaEntidadForm.form.controls.nombre.errors && 
      nuevaEntidadForm.form.controls.nombre.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado el nombre de la nueva entidad", "warning");
      return false;
    }

    if( nuevaEntidadForm.form.controls.apellido.errors && 
      nuevaEntidadForm.form.controls.apellido.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado el apellido de la nueva entidad", "warning");
      return false;
    }

    if( nuevaEntidadForm.form.controls.direccion.errors && 
      nuevaEntidadForm.form.controls.direccion.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado la dirección de la nueva entidad", "warning");
      return false;
    }
    
    if( nuevaEntidadForm.form.controls.telefono.errors && 
      nuevaEntidadForm.form.controls.telefono.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado el teléfono de la nueva entidad", "warning");
      return false;
    }
  
    if( nuevaEntidadForm.form.controls.dob.errors && 
      nuevaEntidadForm.form.controls.dob.errors['required'] ){
      this.notiflixService.showAlert("No se ha indicado la fecha de nacimiento de la nueva entidad", "warning");
      return false;
    }

    if( nuevaEntidadForm.form.value.documento < 8 ){
      this.notiflixService.showAlert("El documento ingresado tiene un formato no válido", "warning");
      return false;
    }

    return true;
  }

}
