import { Component, OnInit } from '@angular/core';
import  { AuthService } from "../../services/auth.service";
import  { UsuariosService }from "../../services/usuarios.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private authService:AuthService, private usuariosService:UsuariosService ) {
      authService.handleAuthentication();
     }
  ngOnInit() {
  }

}
