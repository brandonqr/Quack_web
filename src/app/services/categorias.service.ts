import { Injectable } from '@angular/core';
import { Http, Headers }  from "@angular/http";

@Injectable()
export class CategoriasService {
private eventoUrl:string="http://localhost:3000/categoria";
  constructor( private http:Http ) { }

  nuevoEvento ( categoria:String ){
    let body = categoria;
    let headers = new Headers({
      'Content-Type' : 'application/json'

    });
    return this.http.post( this.eventoUrl, body, { headers } )
      .map( res => {
        return res.json();
      } );
    }
}
