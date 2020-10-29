import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

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
  }

}
