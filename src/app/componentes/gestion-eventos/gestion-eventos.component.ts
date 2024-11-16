import { Component } from '@angular/core';
import { InformacionEventoDTO } from '../../dto/evento/informacion-evento-dto';
import { EventosService } from '../../servicios/eventos.service';
import Swal from 'sweetalert2';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestion-eventos',
  standalone: true,
  imports: [HeaderAdminComponent, PostHeaderComponent, FooterComponent, RouterModule],
  templateUrl: './gestion-eventos.component.html',
  styleUrl: './gestion-eventos.component.css'
})
export class GestionEventosComponent {
  eventos: InformacionEventoDTO[];
  seleccionados!: InformacionEventoDTO[];
  textoBtnEliminar!: string;


  constructor(public eventosService:EventosService) {
    this.eventos = eventosService.listar();
    this.seleccionados = [];
    this.textoBtnEliminar = '';
  }

  public seleccionar(evento: InformacionEventoDTO, estado: boolean) {


    if (estado) {
      this.seleccionados.push(evento);
    } else {
      this.seleccionados.splice(this.seleccionados.indexOf(evento), 1);
    }
   
   
    this.actualizarMensaje();
   
   
   }
   
   
   private actualizarMensaje() {
    const tam = this.seleccionados.length;
   
   
    if (tam != 0) {
      if (tam == 1) {
       this.textoBtnEliminar = "1 elemento";
      } else {
      this.textoBtnEliminar = tam + " elementos";
      }
    } else {
     this.textoBtnEliminar = "";
    }
   }
   public confirmarEliminacion() {
    Swal.fire({
      title: "Estás seguro?",
      text: "Esta acción cambiará el estado de los eventos a Inactivos.",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarEventos();
        Swal.fire("Eliminados!", "Los eventos seleccionados han sido eliminados.", "success");
      }
    });
   }
   public eliminarEventos() {
    this.seleccionados.forEach(e1 => {
      this.eventosService.eliminar(e1.id);
      this.eventos = this.eventos.filter(e2 => e2.id !== e1.id);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
   
   
   }
}
