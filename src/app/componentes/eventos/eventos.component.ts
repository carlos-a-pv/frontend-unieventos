import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { SearchComponent } from "../search/search.component";
import { EventoComponent } from "../evento/evento.component";
import { ItemEventoDTO } from '../../dto/evento/item-evento-dto';
import { PublicoService } from '../../servicios/publico.service';
import Swal from 'sweetalert2';
import { ToeknService } from '../../servicios/token.service';
import { DetalleCarritoComponent } from "../detalle-carrito/detalle-carrito.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [HeaderComponent, PostHeaderComponent, FooterComponent, SearchComponent, EventoComponent, DetalleCarritoComponent, CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  eventos!:ItemEventoDTO [];
  isLogged = false;
  mostrarCarrito: boolean = false;
  

  constructor(private publicService:PublicoService, private tokenService:ToeknService){
    this.isLogged = this.tokenService.isLogged();
    this.eventos = [];
    this.obtenerEventos();
  }

  public obtenerEventos(){
    this.publicService.listarEventos().subscribe({
      next: (data) => {
        this.eventos = data.respuesta;
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

  ocultarCarrito():void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
