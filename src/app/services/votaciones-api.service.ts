import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IEntidad } from '../interfaces/IEntidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotacionesApiService {

  constructor( private http:HttpClient ) { }
  
  getPostulantes() {
    let url = ` ${ environment.api_base_url }/perfiles/postulantes `;
    return this.http.get( url )
      .pipe( map( ( data:any ) => data['postulantes'] ) );
  }

  verificarDocumento( documento: string ){
    let url = ` ${ environment.api_base_url }/entidades/entidad/${ documento } `;

    return this.http.get( url ).toPromise();
  }

  verificarVotoDoble( documento: string ){
    let url = ` ${ environment.api_base_url }/votos/documento/${ documento } `;

    return this.http.get( url ).toPromise();
  }

  votar( documento: string, idPostulante: number ){
    let url = `${ environment.api_base_url }/votos/votar`;

    let body = JSON.stringify( {
      documento_votante: documento,
      id_entidad_postulante: idPostulante
    } );

    
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.post(url, body, { headers });
  }

  login( email: string, clave: string ){
    let url = `${ environment.api_base_url }/usuarios/login`;

    let body = JSON.stringify( {
      email,
      clave
    } );

    
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.post(url, body, { headers }).toPromise();
  }

  getRanking(){
    let url = `${ environment.api_base_url }/entidades/ranking`;

    return this.http.get( url )
      .pipe( map( ( data: any ) => data['postulantes'] ) );
  }

  getListaVotos(){
    let url = `${ environment.api_base_url }/votos/listar`;

    return this.http.get( url )
      .pipe( map( ( data: any ) => data['votos'] ) );
  }

  getDetalleVoto( id: number ){
    let url = `${ environment.api_base_url }/votos/detalle/${ id } `;

    return this.http.get( url )
      .pipe( map( ( data: any ) => data['voto'] ) );
  }

  cambiarClave( id: number, clave: string ){
    let url = `${ environment.api_base_url }/usuarios/clave`;
    

    let body = JSON.stringify( {
      id,
      clave
    } );

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.put(url, body, { headers }).toPromise();
  }

  agregarEntidad( entidad:IEntidad ){
    let url = `${ environment.api_base_url }/perfiles/nuevo`;

    let body = JSON.stringify( entidad );
  
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.post(url, body, { headers })
      .pipe( map( data => data['code'] ) );
  }
}
