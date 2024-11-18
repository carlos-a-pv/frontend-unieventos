import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {

  @Input() titulo:String = "texto de prueba";
  @Input() ciudad:String = "";
  @Input() direccion:String = "";
  @Input() fecha!:Date;
  @Input() urlImagenPoster!:String;

  
  constructor(private router:Router){
    
  }

  public comprar():void {
    
  }

  public irDetalleEvento():void{
    // this.router.navigate(["/detalle-evento/:id"])
  }
}
