import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { ClienteService } from '../../servicios/cliente.service';
import { CuponInfoDTO } from '../../dto/cupon/cupon-info-dto';
import Swal from 'sweetalert2';
import { CuponComponent } from "../cupon/cupon.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cupones',
  standalone: true,
  imports: [HeaderComponent, PostHeaderComponent, CuponComponent, FooterComponent],
  templateUrl: './cupones.component.html',
  styleUrl: './cupones.component.css'
})
export class CuponesComponent {
  
  cupones:CuponInfoDTO [];

  constructor(private clientService:ClienteService){
    this.cupones = []
    this.obtenerCupones();
  }

  public obtenerCupones(){
    this.clientService.listarCupones().subscribe({
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
