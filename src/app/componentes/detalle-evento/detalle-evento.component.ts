import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InformacionEventoDTO } from '../../dto/evento/informacion-evento-dto';
import { AdministradorService } from '../../servicios/administrador.service';
import Swal from 'sweetalert2';


@Component({
 selector: 'app-detalle-evento',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './detalle-evento.component.html',
 styleUrl: './detalle-evento.component.css'
})
export class DetalleEventoComponent {


 codigoEvento: string = '';
 evento!: InformacionEventoDTO;


 constructor(private route: ActivatedRoute, private administradorServicio: AdministradorService) {
   this.route.params.subscribe((params) => {
     this.codigoEvento = params['id'];
     this.obtenerEvento();
   });
 }

 public obtenerEvento() {
    this.administradorServicio.obtenerEvento(this.codigoEvento).subscribe({
      next: (data) => {
        this.evento = data.respuesta;
      },
      error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo obtener el evento'
        });
      }
    });
    }
}

