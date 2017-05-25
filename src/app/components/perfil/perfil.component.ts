import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import {UsuariosService} from "../../services/usuarios.service";

import { Usuario } from "../../interfaces/usuario.interface";

import  { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
  usuario:Usuario={
    nickname : "",
    nombre : "",
    email : "",
    genero : "",
    localidad : "",
    socialId : "",
    imagen : ""

  }
  profile: any;
  username:any="";
  socialId:any;
  constructor( public auth: AuthService, public usuariosService:UsuariosService, private router:Router, private aRoute:ActivatedRoute ) {

   }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;

    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.socialId=this.profile.sub;
        //comprueba si el usario existe mediante la socialId, sino existe lo crea
        this.crearUsuario();


      });
    }
    if(this.profile!=null){
      //obtiene el usuario
      this.socialId=this.profile.sub;
      this.crearUsuario();
    }
      //this.socialId=this.profile.sub;
  }
  asignarValoresAUsuario(){
    console.log("asignar")
    this.usuario.nickname=this.profile.nickname;
    this.usuario.email=this.profile.email;
    this.usuario.nombre=this.profile.name;
    this.usuario.genero=(this.profile.gender=="male")?"hombre":"mujer"
    this.usuario.socialId=this.profile.sub;
    this.usuario.imagen=this.profile.picture;
  }
  public crearUsuario() {

    this.usuariosService.obtenerUsuarioBySocialId( this.socialId )
                        .subscribe( data => {
                          if(data.length==0){
                            this.asignarValoresAUsuario()//llena los atributos de usuario que se obtienen por auth0
                            this.usuariosService.crearUsuario( this.usuario )
                                .subscribe();

                          }
                          else{

                            this.usuario = data[0]
                          //  id.id=this.usuario['_id'];
                            this.router.navigate([ 'perfil', this.usuario['_id'] ]);
                            localStorage.setItem( "id", this.usuario['_id'] );

                          }
                        });
 }


}
