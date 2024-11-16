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
import { CuponesComponent } from './componentes/cupones/cupones.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';

export const routes: Routes = [
    {path: '', component: HomeComponentCliente},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    {path: 'recuperar-cuenta', component: RecuperarCuentaComponent},
    {path: 'validar-codigo-recuperacion', component: ValidarCodigoRecuperacionComponent},
    {path: 'activar-cuenta', component: ActivarCuentaComponent},
    {path: 'registro-evento', component: RegistroEventoComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["ADMINISTRADOR"]}},
    {path: "gestion-eventos", component: GestionEventosComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["ADMINISTRADOR"]} },
    {path: 'detalle-evento/:id', component: DetalleEventoComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["ADMINISTRADOR"]}  },
    {path: 'eventos', component: EventosComponent},
    {path: 'cupones', component: CuponesComponent},

    {path: "**", pathMatch: "full", redirectTo: ""}
];
