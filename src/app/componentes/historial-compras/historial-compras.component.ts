import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { ItemOrdenDTO } from '../../dto/orden/item-orden-dto';
import { PublicoService } from '../../servicios/publico.service';
import { ClienteService } from '../../servicios/cliente.service';
import Swal from 'sweetalert2';
import { OrdenComponent } from "../orden/orden.component";

@Component({
  selector: 'app-historial-compras',
  standalone: true,
  imports: [HeaderComponent, PostHeaderComponent, FooterComponent, OrdenComponent],
  templateUrl: './historial-compras.component.html',
  styleUrl: './historial-compras.component.css'
})
export class HistorialComprasComponent {

  listOrdenes:ItemOrdenDTO[];

  constructor(private clientService:ClienteService){
    this.listOrdenes = [];
    this.obtenerOrdenes();
  }

  public obtenerOrdenes(){
    this.clientService.listarOrdenes().subscribe({
      next: (data) => {
        this.listOrdenes = data.respuesta;
        console.log(data.respuesta)
      },
      error: (error) => {
        Swal.fire({
          icon:"error",
          title:"Error",
          text:error.error.respuesta 
        })
      }
    });
  }

}
