import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { EventoComponent } from "../evento/evento.component";
import { BannerComponent } from "../banner/banner.component";
import { ItemEventoDTO } from '../../dto/evento/item-evento-dto';
import { PublicoService } from '../../servicios/publico.service';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-cliente',
  standalone: true,
  imports: [RouterModule, HeaderComponent,FooterComponent, BannerComponent],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeComponentCliente {
  eventos!:ItemEventoDTO [];

  constructor(private cuentaServicio:PublicoService){

    cuentaServicio.listarEventos().subscribe({
      next: (data) => {
        this.eventos = data.respuesta;
        console.log(data.respuesta)
      },
      error: (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.error.respuesta
        });
      },
    })
  }
}
