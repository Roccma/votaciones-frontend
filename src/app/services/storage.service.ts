import { Injectable } from '@angular/core';
import { IEntidad } from '../interfaces/IEntidad';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  loguear( usuario: IEntidad ){
    localStorage.setItem('usuario', JSON.stringify( usuario ));
  }

  getLogueado(){
    let usuario = localStorage.getItem('usuario');
    return JSON.parse(usuario);
  }
  
  desloguear(){
    localStorage.removeItem('usuario');
  }

}
