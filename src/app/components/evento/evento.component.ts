import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { EventosService} from "../../services/eventos.service";
import { Evento } from "../../interfaces/evento.interface";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styles: []
})
export class EventoComponent implements OnInit {
 evento:Evento;
 participante:any={
   usuario_id : "",
   evento_id : "",
   creado :false
 }
 profile:any;
socialId:any;
usuario_id:any;
constructor(private activatedRoute:ActivatedRoute, private eventoService:EventosService, private usuariosService:UsuariosService) {

 }
  ngOnInit() {
    this.usuario_id=localStorage.getItem("id");
    this.activatedRoute.params
      .map(parametros=>parametros['id'])
      .subscribe(id=>{
        this.eventoService.getEventoById(id)
            .subscribe(data=>this.evento=data)
        })
  }
  quackEvento(){
    this.participante.usuario_id=this.usuario_id;
    this.participante.evento_id=this.evento['_id'];
    this.usuariosService.existeEvento(this.participante).subscribe(data=>{
      if(data.length==0)
        this.usuariosService.actualizarEventos(this.participante).subscribe(data=>{});
      else
        console.log("ya esta agregado");
    });

    //
  }

}
