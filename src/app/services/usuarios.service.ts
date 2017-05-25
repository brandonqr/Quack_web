import { Injectable } from '@angular/core';
import { Http, Headers }  from "@angular/http";
import { Usuario }  from "../interfaces/usuario.interface";
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map'

@Injectable()
export class UsuariosService {
  public usuario:Usuario;
  profile:any;
  socialId:any;
private usuarioUrl:string="http://localhost:3000/usuario";

  constructor( private http:Http, private auth:AuthService ) {
    console.log("eso es el usuario")

   }


   existeEvento(usuario:any){
     let url=`${ this.usuarioUrl }/actualizar/eventos/${ usuario.evento_id }/${ usuario.usuario_id }`
     return this.http.get( url )
       .map( res => {
         return res.json();
       } );

   }
  getUsuarioByUsername( username:string ){
    let url=`${ this.usuarioUrl }/username/${ username }`
    return this.http.get(url)
                .map( res => res.json())
  }
  public obtenerUsuarioBySocialId( socialId:string){
    let url=`${ this.usuarioUrl }/socialId/${ socialId }`
    return this.http.get(url)
                .map( res => res.json())
  }
  public obtenerUsuarioById( usuario_id:string){
    let url=`${ this.usuarioUrl }/${ usuario_id }`
    return this.http.get(url)
                .map( res => res.json())
  }
  crearUsuario( usuario:Usuario ){
  let body = JSON.stringify( usuario );
   let headers = new Headers({
     'Content-Type' : 'application/json'
   });

   return this.http.post( this.usuarioUrl, body, { headers } )
     .map( res => {
       return res.json();
     } );
  }
  actualizarEventos( usuarioEvento:any){

    let body =  JSON.stringify( usuarioEvento );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let url=`${ this.usuarioUrl }/actualizar/eventos/${ usuarioEvento.evento_id }`

    return this.http.put( url, body, { headers } )
      .map( res => {
        return res.json();
      } );



  }

}
