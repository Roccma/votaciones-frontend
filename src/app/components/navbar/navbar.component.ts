import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() nombre:string;
  @Input() apellido:string;
  @Input() documento:string;

  opcionesMenu:any[] = [
    {
      title : 'Más votados',
      redirect_to : 'mas_votados',
      icon: 'fa fa-users'
    },
    {
      title : 'Listar votos',
      redirect_to : 'listar_votos',
      icon: 'fa fa-list'
    },
    {
      title : 'Modificar clave',
      redirect_to : 'modificar_clave',
      icon: 'fa fa-key'
    },
    {
      title : 'Nueva entidad',
      redirect_to : 'nueva_entidad',
      icon: 'fa fa-plus'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
