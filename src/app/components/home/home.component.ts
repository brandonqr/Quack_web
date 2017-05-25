import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsuariosService } from "../../services/usuarios.service";
import { EventosService} from "../../services/eventos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
usuario:any;
eventos:any;
eventosUsuario:any;
eventosCreados:any=[];
eventosNoCreados:any=[];
  constructor( private activateRoute:ActivatedRoute, private usuariosService:UsuariosService, private eventosService:EventosService ) {

    let usuario_id=localStorage.getItem("id");
    console.log(usuario_id)
    //recuperar el usuario de la base de datos
    this.usuariosService.obtenerUsuarioById(usuario_id)
        .subscribe(data=>{
          this.usuario=data;
          this.eventosUsuario=this.usuario.eventos;
          console.log(this.eventosUsuario)
          for (let i = 0; i < this.eventosUsuario.length; i++) {
              if(this.eventosUsuario[i].creado==false)
              this.eventosService.getEventoById( this.eventosUsuario[i].evento )
                  .subscribe(data=>{
                    this.eventosNoCreados.push(data);
                  })

              else
              this.eventosService.getEventoById( this.eventosUsuario[i].evento )
                  .subscribe(data=>{
                    this.eventosCreados.push(data);
                  })
          }
          console.log(this.eventosNoCreados)

          })

    this.eventosService.getEventos()
        .subscribe(data=>this.eventos=data);
   }


  ngOnInit() {
  }

}
