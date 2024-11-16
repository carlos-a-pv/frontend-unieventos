import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../servicios/eventos.service';
import { CommonModule } from '@angular/common';
import { InformacionEventoDTO } from '../../dto/evento/informacion-evento-dto';


@Component({
 selector: 'app-detalle-evento',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './detalle-evento.component.html',
 styleUrl: './detalle-evento.component.css'
})
export class DetalleEventoComponent {


 codigoEvento: string = '';
 evento: InformacionEventoDTO | undefined;


 constructor(private route: ActivatedRoute, private eventosService: EventosService) {
   this.route.params.subscribe((params) => {
     this.codigoEvento = params['id'];
     this.obtenerEvento();
   });
 }


 public obtenerEvento() {
   const eventoConsultado = this.eventosService.obtener(this.codigoEvento);
   if (eventoConsultado != undefined) {
     this.evento = eventoConsultado;
   }
 }


}

