import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { SearchComponent } from "../search/search.component";
import { EventoComponent } from "../evento/evento.component";
import { ItemEventoDTO } from '../../dto/evento/item-evento-dto';
import { PublicoService } from '../../servicios/publico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [HeaderComponent, PostHeaderComponent, FooterComponent, SearchComponent, EventoComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  eventos!:ItemEventoDTO [];

  constructor(private publicService:PublicoService){
    publicService.listarEventos().subscribe({
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
