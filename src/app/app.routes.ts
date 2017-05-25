import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent} from "./components/perfil/perfil.component";
import { AuthGuardService} from "./services/auth-guard.service";
import { HomeComponent } from "./components/home/home.component";
import { EventoComponent } from "./components/evento/evento.component";

const APP_ROUTES: Routes = [
  {
     path: 'perfil/:id',
     component: PerfilComponent,
     canActivate:[ AuthGuardService ]
  },
  {
     path: 'perfil',
     component: PerfilComponent,
     canActivate:[ AuthGuardService ]
  },
  { path: 'home/:id', component: HomeComponent },
  { path: 'evento/:id', component: EventoComponent },

  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
