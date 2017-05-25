import { Component, OnInit, Input } from '@angular/core';
import { } from "../../pipes/imagen-default.pipe";

@Component({
  selector: 'app-home-eventos',
  templateUrl: './home-eventos.component.html',
  styles: []
})
export class HomeEventosComponent implements OnInit {
@Input('eventos') eventos;
  constructor() { }

  ngOnInit() {
  }

}
