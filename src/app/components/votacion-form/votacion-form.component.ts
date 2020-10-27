import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILogin } from '../../interfaces/ILogin';
import { IPostulante } from '../../interfaces/IPostulante';

@Component({
  selector: 'app-votacion-form',
  templateUrl: './votacion-form.component.html',
  styleUrls: ['./votacion-form.component.css']
})
export class VotacionFormComponent implements OnInit {
  

  postulantes:IPostulante[] = [
    { 
      id : 1,
      nombre: "Mauro",
      apellido: "Rocca"
    },
    { 
      id : 2,
      nombre: "Pablo",
      apellido: "Perez"
    }
  ];

  voto:ILogin = {
    documento: "",
    postulante: this.postulantes[0].id
  };


  constructor() { }

  ngOnInit(): void {
  }

  votar( votoForm:NgForm ): void{
    console.log( votoForm );
  }

}
