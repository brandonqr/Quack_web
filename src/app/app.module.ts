import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UsuariosService } from "./services/usuarios.service";
import { EventosService } from "./services/eventos.service";

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';
import { HomePerfilComponent } from './components/home/home-perfil.component';
import { HomeEventosComponent } from './components/home/home-eventos.component';
import { HomeCategoriasComponent } from './components/home/home-categorias.component';

import { ImagenDefaultPipe } from './pipes/imagen-default.pipe';
import { EventoComponent } from './components/evento/evento.component';
import { HomePerfilEventosComponent } from './components/home/home-perfil-eventos.component';
import { PerfilEventoComponent } from './components/perfil/perfil-evento.component';
import { PerfilEventoCrearComponent } from './components/perfil/perfil-evento-crear.component';
import { PerfilEventoEditarComponent } from './components/perfil/perfil-evento-editar.component';
import { PerfilEventoEliminarComponent } from './components/perfil/perfil-evento-eliminar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilComponent,
    HomeComponent,
    HomePerfilComponent,
    HomeEventosComponent,
    HomeCategoriasComponent,
    ImagenDefaultPipe,
    EventoComponent,
    HomePerfilEventosComponent,
    PerfilEventoComponent,
    PerfilEventoCrearComponent,
    PerfilEventoEditarComponent,
    PerfilEventoEliminarComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UsuariosService,
    EventosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
