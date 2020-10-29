import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {
 
  constructor( private storageService: StorageService ) { }

  ngOnInit(): void {
    this.storageService.desloguear();
  }

}
