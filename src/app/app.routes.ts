import { Routes } from '@angular/router';
import { HomeComponentCliente } from './componentes/home-cliente/home-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RecuperarCuentaComponent } from './componentes/recuperar-cuenta/recuperar-cuenta.component';
import { ValidarCodigoRecuperacionComponent } from './componentes/validar-codigo-recuperacion/validar-codigo-recuperacion.component';
import { ActivarCuentaComponent } from './componentes/activar-cuenta/activar-cuenta.component';
import { RegistroEventoComponent } from './componentes/registro-evento/registro-evento.component';
import { GestionEventosComponent } from './componentes/gestion-eventos/gestion-eventos.component';
import { DetalleEventoComponent } from './componentes/detalle-evento/detalle-evento.component';
import { EventosComponent } from './componentes/eventos/eventos.component';

export const routes: Routes = [
    {path: '', component: HomeComponentCliente},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'recuperar-cuenta', component: RecuperarCuentaComponent},
    {path: 'validar-codigo-recuperacion', component: ValidarCodigoRecuperacionComponent},
    {path: 'activar-cuenta', component: ActivarCuentaComponent},
    {path: 'registro-evento', component: RegistroEventoComponent},
    {path: "gestion-eventos", component: GestionEventosComponent },
    {path: 'detalle-evento/:id', component: DetalleEventoComponent },
    {path: 'eventos', component: EventosComponent},
    {path: "**", pathMatch: "full", redirectTo: ""}
];
