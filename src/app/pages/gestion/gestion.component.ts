import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { IEntidad } from '../../interfaces/IEntidad';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  usuario:IEntidad = null;

  constructor( private router: Router,
              private storageService: StorageService ) { 
    this.controlarLogueo();
  }

  ngOnInit(): void {
  }

  controlarLogueo(){
    if( !this.storageService.getLogueado() ){
      this.router.navigate(['/votacion']);
    }
    else{
      this.usuario = this.storageService.getLogueado();
    }
  }

}
