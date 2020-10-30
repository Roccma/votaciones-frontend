import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacion-modal',
  templateUrl: './autenticacion-modal.component.html',
  styleUrls: ['./autenticacion-modal.component.css']
})
export class AutenticacionModalComponent implements OnInit {
  
  title:string = "Autenticación";

  constructor() { }

  ngOnInit(): void {
  }

}
