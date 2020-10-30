import { Injectable } from '@angular/core';
import { IEntidad } from '../interfaces/IEntidad';
import { IVoto } from '../interfaces/IVoto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public votoSeleccionado:IVoto = null;

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

  setVotoSeleccionado( voto:IVoto ){
    localStorage.setItem('voto', JSON.stringify( voto ));
  }

  getVotoSeleccionado(){
    let voto = localStorage.getItem('voto');
    return JSON.parse(voto);
  }

}
