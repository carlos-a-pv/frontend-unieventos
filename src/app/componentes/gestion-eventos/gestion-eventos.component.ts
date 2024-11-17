import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { ItemEventoDTO } from '../../dto/evento/item-evento-dto';
import { AdministradorService } from '../../servicios/administrador.service';
@Component({
  selector: 'app-gestion-eventos',
  standalone: true,
  imports: [HeaderAdminComponent, PostHeaderComponent, FooterComponent, RouterModule],
  templateUrl: './gestion-eventos.component.html',
  styleUrl: './gestion-eventos.component.css'
})
export class GestionEventosComponent {
  eventos!: ItemEventoDTO[];
  seleccionados!: ItemEventoDTO[];
  textoBtnEliminar!: string;


  constructor(private administradorService:AdministradorService) {
    this.eventos = [];
    this.seleccionados = [];
    this.textoBtnEliminar = '';
    this.obtenerEventos();
  }

  public obtenerEventos(){
    this.administradorService.listarEventosAdmin().subscribe({
      next: (data) => {
        console.log(data.respuesta);
        this.eventos = data.respuesta;
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron obtener los eventos'
      });
      },
    });
   }
   

  public seleccionar(evento: ItemEventoDTO, estado: boolean) {
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
    const eliminaciones = this.seleccionados.map((evento) =>
      this.administradorService.eliminarEvento(evento.id).toPromise()
    );

    Promise.allSettled(eliminaciones).then((resultados) => {
      let exitos = 0;
      resultados.forEach((resultado, index) => {
        if (resultado.status === 'fulfilled') {
          this.eventos = this.eventos.filter((e) => e.id !== this.seleccionados[index].id);
          exitos++;
        } else {
          console.error(`Error eliminando el evento ${this.seleccionados[index].id}`, resultado.reason);
        }
      });

      this.seleccionados = [];
      this.actualizarMensaje();

      Swal.fire({
        title: "Resultado",
        text: `${exitos} evento(s) eliminado(s) exitosamente.`,
        icon: exitos > 0 ? "success" : "error",
      });
    });
  }
}
