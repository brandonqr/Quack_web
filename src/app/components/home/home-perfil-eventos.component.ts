import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-perfil-eventos',
  templateUrl: './home-perfil-eventos.component.html',
  styles: []
})
export class HomePerfilEventosComponent implements OnInit {

@Input() eventos;
@Input()titulo
  constructor() { }

  ngOnInit() {
  }

}
