import { Injectable } from '@angular/core';
import { Http, Headers }  from "@angular/http";
import { Evento }  from "../interfaces/evento.interface";
import { Participantes }  from "../interfaces/participantes.interface";
import  { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class EventosService {
private eventoUrl:string="http://localhost:3000/evento";
  constructor( private http:Http, private router:Router ) {

  }
  getEventos(){
    return this.http.get(this.eventoUrl)
                .map( res => res.json())
  }
  getEventoById( id:string){
    let url=`${ this.eventoUrl}/${ id }`
    return this.http.get(url)
                .map( res => {
                  if(res['_body']=="error"){
                    this.router.navigate([ '/home'])
                    return res.statusText;
                  }
                  else
                    return res.json()
                })
  }
  buscarEvento( nombre:string ){
    let url=`${ this.eventoUrl}/nombre/${ nombre }`
  }
  nuevoEvento ( evento:Evento ){
    let body = JSON.stringify( evento );
    let headers = new Headers({
      'Content-Type' : 'application/json'

    });

    return this.http.post( this.eventoUrl, body, { headers } )
      .map( res => {
        return res.json();
      } );
  }
  agregarParticipantes ( participante:Participantes ){
    console.log(participante)
    let body = JSON.stringify( participante );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let url=`${ this.eventoUrl }/participante/${ participante.evento_id}`

    return this.http.put( url, body, { headers } )
      .map( res => {
        console.log("respuesta")
        console.log(res)
        return res.json();
      } );


  }
}
