import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { ClienteService } from '../../servicios/cliente.service';
import { CuponInfoDTO } from '../../dto/cupon/cupon-info-dto';
import Swal from 'sweetalert2';
import { CuponComponent } from "../cupon/cupon.component";

@Component({
  selector: 'app-cupones',
  standalone: true,
  imports: [HeaderComponent, PostHeaderComponent, CuponComponent],
  templateUrl: './cupones.component.html',
  styleUrl: './cupones.component.css'
})
export class CuponesComponent {
  
  cupones!:CuponInfoDTO [];

  constructor(private clientService:ClienteService){

    clientService.listarCupones().subscribe({
      next: (data) => {
        this.cupones = data.respuesta;
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
