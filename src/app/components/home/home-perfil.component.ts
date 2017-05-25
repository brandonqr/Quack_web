import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-perfil',
  templateUrl: './home-perfil.component.html',
  styles: []
})
export class HomePerfilComponent implements OnInit {

@Input('usuario') usuario;
  constructor() { }

  ngOnInit() {
  }

}
